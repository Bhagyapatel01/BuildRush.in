import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "5 coding challenges per month",
        "Basic code editor",
        "Community support",
        "Public profile"
      ]
    },
    {
      name: "Pro",
      price: "$15",
      period: "per month",
      popular: true,
      features: [
        "Unlimited coding challenges",
        "Advanced IDE features",
        "Priority support",
        "Performance analytics",
        "Private contests",
        "Custom badges"
      ]
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      features: [
        "Everything in Pro",
        "Custom challenges",
        "Team management",
        "API access",
        "Dedicated support",
        "Custom branding"
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen mb-20 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-gray-400">Start with a free account or upgrade for more features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-gray-900 rounded-lg p-8 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
              {plan.popular && (
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white mt-4">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-2 px-4 rounded ${
                plan.popular 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}