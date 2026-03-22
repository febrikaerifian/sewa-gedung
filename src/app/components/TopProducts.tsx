export function TopProducts() {
  const products = [
    { name: 'Wireless Headphones', sales: 1245, revenue: '$62,250' },
    { name: 'Smart Watch Pro', sales: 982, revenue: '$49,100' },
    { name: 'Laptop Stand', sales: 856, revenue: '$25,680' },
    { name: 'USB-C Hub', sales: 745, revenue: '$22,350' },
    { name: 'Mechanical Keyboard', sales: 632, revenue: '$31,600' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Top Products</h3>
        <p className="text-slate-500 text-sm">Best selling items</p>
      </div>
      
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-start justify-between pb-4 border-b border-slate-100 last:border-0">
            <div className="flex-1">
              <p className="font-medium text-slate-800 text-sm">{product.name}</p>
              <p className="text-slate-500 text-xs mt-1">{product.sales} units sold</p>
            </div>
            <p className="font-semibold text-slate-900">{product.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
