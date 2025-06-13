import React, { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [tradespeople, setTradespeople] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    trade: '',
    location: '',
    contact: '',
  })

  useEffect(() => {
    fetchTradespeople()
  }, [])

  async function fetchTradespeople() {
    const { data, error } = await supabase
      .from('tradespeople')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error loading tradespeople:', error)
    } else {
      setTradespeople(data)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const { data, error } = await supabase
      .from('tradespeople')
      .insert([formData])

    if (error) {
      console.error('Error saving tradesperson:', error)
    } else {
      setFormData({ name: '', trade: '', location: '', contact: '' })
      fetchTradespeople()
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>TriniTrades</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Trade (e.g. Plumber)"
          value={formData.trade}
          onChange={e => setFormData({ ...formData, trade: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={e => setFormData({ ...formData, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={e => setFormData({ ...formData, contact: e.target.value })}
        />
        <button type="submit">Add Tradesperson</button>
      </form>

      <h2>Tradespeople</h2>
      <ul>
        {tradespeople.map(trade => (
          <li key={trade.id}>
            <strong>{trade.trade}</strong>: {trade.name} ({trade.location}) - {trade.contact}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

