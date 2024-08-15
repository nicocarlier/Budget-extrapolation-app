import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

function Homepage() {
  const features = [
    {
      title: "Budget Forecasting",
      description:
        "Project your financial future with our advanced forecasting tools.",
      icon: PresentationChartLineIcon,
    },
    {
      title: "Expense Tracking",
      description:
        "Keep tabs on your spending habits and identify areas for improvement.",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Financial Reports",
      description:
        "Generate comprehensive reports to gain insights into your financial health.",
      icon: ChartBarIcon,
    },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-gray-50">
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to{" "}
            <span className="text-blue-600">Budget Extrapolation</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Plan your financial future with confidence. Our tools help you
            forecast, track, and optimize your budget.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href="/projections"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                href="/demo"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to take control of your finances?
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign up now
                <ArrowRightIcon
                  className="ml-3 -mr-1 h-5 w-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
