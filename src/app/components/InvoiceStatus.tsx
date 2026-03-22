export function InvoiceStatus() {
  const invoices = [
    {
      id: 'INV-2025-124',
      client: 'PT Maju Jaya',
      amount: 'Rp 45,000,000',
      dueDate: '2025-12-20',
      status: 'Paid'
    },
    {
      id: 'INV-2025-125',
      client: 'CV Digital Media',
      amount: 'Rp 28,500,000',
      dueDate: '2025-12-22',
      status: 'Pending'
    },
    {
      id: 'INV-2025-126',
      client: 'PT Teknologi Maju',
      amount: 'Rp 62,000,000',
      dueDate: '2025-12-18',
      status: 'Overdue'
    },
    {
      id: 'INV-2025-127',
      client: 'PT Sentosa Karya',
      amount: 'Rp 18,750,000',
      dueDate: '2025-12-25',
      status: 'Pending'
    },
    {
      id: 'INV-2025-128',
      client: 'PT Indonesia Digital',
      amount: 'Rp 55,200,000',
      dueDate: '2025-12-15',
      status: 'Paid'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Overdue':
        return 'bg-rose-100 text-rose-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Invoice Status</h3>
        <p className="text-slate-500 text-sm">Recent invoices and payments</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Invoice ID</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Client</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Amount</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Due Date</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-slate-100 hover:bg-red-50 transition-colors">
                <td className="py-3 px-4 text-slate-800 font-medium text-sm">{invoice.id}</td>
                <td className="py-3 px-4 text-slate-800 text-sm">{invoice.client}</td>
                <td className="py-3 px-4 text-slate-800 font-semibold text-sm">{invoice.amount}</td>
                <td className="py-3 px-4 text-slate-600 text-sm">{invoice.dueDate}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
