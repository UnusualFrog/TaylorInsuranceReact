'use client'

export default function tempQuote() {
    const printPage = () => {
        window.print();
      };
    
      return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Example Quote</h1>
          <p><strong>Quote ID:</strong> Q12345</p>
          <p><strong>Customer:</strong> John Doe</p>
          <p><strong>Quote Date:</strong> 02/26/2025</p>
          <p><strong>Quote Expires:</strong> 03/26/2025</p>
          <p><strong>Total:</strong> $1,250.00</p>
          <p><strong>Details:</strong> 3-Year Insurance Coverage</p>
    
          <div className="flex justify-between mt-6">
            <button 
              onClick={printPage} 
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Print Quote
            </button>
          </div>
        </div>
      </main>
      </div>
      );
    }