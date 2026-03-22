export function RecentOrders() {
  const orders = [
    { id: 'ORD-2451', customer: 'Sarah Johnson', product: 'Wireless Headphones', amount: '$129.99', status: 'Completed', date: '2025-12-15' },
    { id: 'ORD-2450', customer: 'Michael Chen', product: 'Smart Watch Pro', amount: '$249.99', status: 'Processing', date: '2025-12-15' },
    { id: 'ORD-2449', customer: 'Emma Wilson', product: 'Laptop Stand', amount: '$49.99', status: 'Completed', date: '2025-12-14' },
    { id: 'ORD-2448', customer: 'James Brown', product: 'USB-C Hub', amount: '$34.99', status: 'Shipped', date: '2025-12-14' },
    { id: 'ORD-2447', customer: 'Lisa Anderson', product: 'Mechanical Keyboard', amount: '$159.99', status: 'Completed', date: '2025-12-13' },
    { id: 'ORD-2446', customer: 'David Lee', product: 'Wireless Mouse', amount: '$39.99', status: 'Processing', date: '2025-12-13' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Processing':
        return 'bg-blue-100 text-blue-700';
      case 'Shipped':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Recent Orders</h3>
        <p className="text-slate-500 text-sm">Latest customer transactions</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Order ID</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Customer</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Product</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Amount</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Status</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 text-slate-800 font-medium text-sm">{order.id}</td>
                <td className="py-3 px-4 text-slate-800 text-sm">{order.customer}</td>
                <td className="py-3 px-4 text-slate-600 text-sm">{order.product}</td>
                <td className="py-3 px-4 text-slate-800 font-medium text-sm">{order.amount}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600 text-sm">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
