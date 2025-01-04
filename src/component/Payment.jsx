import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const paymentMethods = [
  {
    id: 'telebirr',
    name: 'TeleBirr',
    logo: 'https://jolly-bublanina-862f0c.netlify.app/assets/TeleBirr-BFTBukLJ.svg'
  },
  {
    id: 'cbe',
    name: 'CBE Birr',
    logo: 'https://jolly-bublanina-862f0c.netlify.app/assets/cbebirr-Bd0w7Taw.svg'
  },
  {
    id: 'abyssinia',
    name: 'Abyssinia Bank',
    logo: 'https://jolly-bublanina-862f0c.netlify.app/assets/abyssinia-BiMvYR9c.svg'
  },
  {
    id: 'ebirr',
    name: 'E-Birr',
    logo: 'https://jolly-bublanina-862f0c.netlify.app/assets/ebirr_logo-Cj3OZifi.svg'
  },
  {
    id: 'amole',
    name: 'Amole',
    logo: 'https://jolly-bublanina-862f0c.netlify.app/assets/amole-GrzGAM6G.svg'
  },
  {
    id: 'mpesa',
    name: 'M-Pesa',
    logo: 'https://jolly-bublanina-862f0c.netlify.app/assets/mpesa_logo-DKrmCIjW.svg'
  }
];

export default function PaymentSelector() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showQR, setShowQR] = useState(false);

  const handlePaymentSelect = (method) => {
    setSelectedMethod(method);
    setShowQR(true);
  };

  return (
    <div className="mb-6   px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment</h1>
          <div className="w-24 h-1 bg-[#D82D43] mx-auto mb-4 "></div>
          <p className="text-xl text-gray-600">Choose your payment method</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => handlePaymentSelect(method)}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center space-x-4 w-full border border-gray-200"
            >
              <img
                src={method.logo}
                alt={`${method.name} logo`}
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-medium text-gray-900">{method.name}</span>
            </button>
          ))}
        </div>

        {/* QR Code Modal */}
        {showQR && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-sm w-full">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Scan to Pay with {selectedMethod?.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Use your {selectedMethod?.name} app to scan this QR code
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg flex justify-center">
                <QRCode
                  value={`payment:${selectedMethod?.id}:${Date.now()}`}
                  size={200}
                />
              </div>

              <button
                onClick={() => setShowQR(false)}
                className="mt-6 w-full bg-[#D82D43] text-white py-2 px-4 rounded-lg hover:bg-[#D82D43] transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

