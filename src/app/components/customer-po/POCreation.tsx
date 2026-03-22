import React, { useState } from 'react';
import { 
  Calendar, 
  DollarSign, 
  FileText, 
  Plus, 
  Save, 
  Send, 
  Trash2, 
  User, 
  Briefcase 
} from 'lucide-react';

interface POItem {
  id: string;
  description: string;
  quantity: number;
  unit: string;
  price: number;
  total: number;
}

export function POCreation() {
  const [poNumber, setPoNumber] = useState(`PO-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`);
  const [poDate, setPoDate] = useState(new Date().toISOString().split('T')[0]);
  const [customer, setCustomer] = useState('');
  const [project, setProject] = useState('');
  const [notes, setNotes] = useState('');
  
  const [items, setItems] = useState<POItem[]>([
    { id: '1', description: '', quantity: 1, unit: 'ls', price: 0, total: 0 }
  ]);

  const handleItemChange = (id: string, field: keyof POItem, value: any) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'price') {
          updatedItem.total = Number(updatedItem.quantity) * Number(updatedItem.price);
        }
        return updatedItem;
      }
      return item;
    }));
  };

  const addItem = () => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      description: '',
      quantity: 1,
      unit: 'ls',
      price: 0,
      total: 0
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.total, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.11; // 11% PPN
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ poNumber, poDate, customer, project, items, notes });
    alert('PO Created Successfully!');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Create New Purchase Order</h1>
          <p className="text-slate-500 mt-1">Create a new PO for customer projects</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors bg-white shadow-sm">
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button 
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
          >
            <Send className="w-4 h-4" />
            Create PO
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <FileText className="w-5 h-5 text-blue-600" />
              PO Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">PO Number</label>
                <div className="relative">
                  <input
                    type="text"
                    value={poNumber}
                    onChange={(e) => setPoNumber(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-mono text-slate-800"
                    placeholder="PO-2024-001"
                  />
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">PO Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={poDate}
                    onChange={(e) => setPoDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Customer Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                    placeholder="Enter customer name"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Project Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                    placeholder="Enter project name"
                  />
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                Items & Pricing
              </h2>
              <button 
                onClick={addItem}
                className="text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100 font-medium flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={item.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200 relative group transition-all hover:border-blue-200 hover:shadow-sm">
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute -top-2 -right-2 bg-white text-slate-400 hover:text-red-500 p-1.5 rounded-full shadow-sm border border-slate-200 opacity-0 group-hover:opacity-100 transition-all z-10"
                    title="Remove Item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-5 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Description</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        placeholder="Item description"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Qty</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(item.id, 'quantity', Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="md:col-span-3 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Price (IDR)</label>
                      <input
                        type="number"
                        min="0"
                        value={item.price}
                        onChange={(e) => handleItemChange(item.id, 'price', Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide text-right block">Total</label>
                      <div className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-md text-slate-700 font-medium text-right font-mono text-sm">
                        {item.total.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6 space-y-3">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium font-mono">{calculateSubtotal().toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>PPN (11%)</span>
                <span className="font-medium font-mono">{calculateTax().toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
                <span>Total Amount</span>
                <span className="text-blue-600 font-mono">{calculateTotal().toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar / Additional Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sticky top-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">Additional Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 h-40 resize-none text-sm bg-slate-50 transition-all"
              placeholder="Add payment terms, delivery instructions, or other notes here..."
            />
            
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Status</h3>
              <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                <div className="relative pl-10">
                  <div className="absolute left-3 top-1 w-4 h-4 rounded-full bg-blue-500 border-[3px] border-white shadow-sm ring-1 ring-blue-500"></div>
                  <p className="text-sm font-bold text-slate-900">Draft Created</p>
                  <p className="text-xs text-slate-500 mt-0.5">By You • Now</p>
                </div>
                <div className="relative pl-10 opacity-40">
                  <div className="absolute left-3 top-1 w-4 h-4 rounded-full bg-slate-200 border-[3px] border-white ring-1 ring-slate-300"></div>
                  <p className="text-sm font-bold text-slate-900">Manager Approval</p>
                  <p className="text-xs text-slate-500 mt-0.5">Pending</p>
                </div>
                <div className="relative pl-10 opacity-40">
                  <div className="absolute left-3 top-1 w-4 h-4 rounded-full bg-slate-200 border-[3px] border-white ring-1 ring-slate-300"></div>
                  <p className="text-sm font-bold text-slate-900">Finance Verification</p>
                  <p className="text-xs text-slate-500 mt-0.5">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}