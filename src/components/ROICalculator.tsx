"use client";

import { useState } from "react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50);
  const [sqft, setSqft] = useState(10000);
  const [incidents, setIncidents] = useState(3);

  // Mock calculations — placeholder formulas for demo
  const avgCostPerIncident = 47000;
  const annualLiabilityCost = incidents * avgCostPerIncident;
  const mattingInvestment = Math.round(sqft * 0.45);
  const estimatedReduction = 0.4;
  const incidentsPrevented = Math.round(incidents * estimatedReduction * 10) / 10;
  const savingsFromPrevention = Math.round(incidentsPrevented * avgCostPerIncident);
  const floorMaintenanceSavings = Math.round(sqft * 0.12 * employees * 0.01);
  const totalSavings = savingsFromPrevention + floorMaintenanceSavings;
  const netSavings = totalSavings - mattingInvestment;
  const roiPercent = Math.round((netSavings / mattingInvestment) * 100);
  const paybackMonths = Math.max(1, Math.round((mattingInvestment / totalSavings) * 12));

  return (
    <section className="bg-slate-50 py-16 md:py-24" aria-label="ROI Calculator">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-crimson">
            See Your Savings
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Liability &amp; ROI Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Estimate how a professional matting program could reduce your
            facility&apos;s liability costs. Adjust the sliders to match your
            situation.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Inputs */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Your Facility
            </h3>

            {/* Employees */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="employees"
                  className="text-sm font-medium text-slate-700"
                >
                  Number of Employees
                </label>
                <span className="text-sm font-bold text-navy">{employees}</span>
              </div>
              <input
                id="employees"
                type="range"
                min={10}
                max={500}
                step={10}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="mt-2 w-full accent-crimson"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            {/* Square footage */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="sqft"
                  className="text-sm font-medium text-slate-700"
                >
                  Facility Size (sq ft)
                </label>
                <span className="text-sm font-bold text-navy">
                  {sqft.toLocaleString()}
                </span>
              </div>
              <input
                id="sqft"
                type="range"
                min={1000}
                max={100000}
                step={1000}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="mt-2 w-full accent-crimson"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>1,000</span>
                <span>100,000</span>
              </div>
            </div>

            {/* Incidents */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="incidents"
                  className="text-sm font-medium text-slate-700"
                >
                  Slip-and-Fall Incidents per Year
                </label>
                <span className="text-sm font-bold text-navy">{incidents}</span>
              </div>
              <input
                id="incidents"
                type="range"
                min={0}
                max={20}
                step={1}
                value={incidents}
                onChange={(e) => setIncidents(Number(e.target.value))}
                className="mt-2 w-full accent-crimson"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>0</span>
                <span>20</span>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              * Estimates based on industry averages. Actual results vary by
              facility. A professional assessment provides accurate projections.
            </p>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            {/* Current risk */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Current Annual Liability Exposure
              </p>
              <p className="mt-1 text-3xl font-bold text-crimson md:text-4xl">
                {formatCurrency(annualLiabilityCost)}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Based on {incidents} incident{incidents !== 1 ? "s" : ""} at{" "}
                {formatCurrency(avgCostPerIncident)} avg. cost per claim
              </p>
            </div>

            {/* Savings breakdown */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Estimated Annual Savings
              </p>
              <p className="mt-1 text-3xl font-bold text-green md:text-4xl">
                {formatCurrency(totalSavings)}
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-sm text-slate-600">
                    Incidents prevented ({incidentsPrevented}/yr)
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {formatCurrency(savingsFromPrevention)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-sm text-slate-600">
                    Floor maintenance savings
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {formatCurrency(floorMaintenanceSavings)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-sm text-slate-600">
                    Matting program investment
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    &minus;{formatCurrency(mattingInvestment)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">
                    Net annual savings
                  </span>
                  <span className="text-sm font-bold text-green">
                    {formatCurrency(netSavings)}
                  </span>
                </div>
              </div>
            </div>

            {/* ROI metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <p className="text-2xl font-bold text-navy md:text-3xl">
                  {roiPercent}%
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  First-Year ROI
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <p className="text-2xl font-bold text-navy md:text-3xl">
                  {paybackMonths} mo
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Payback Period
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-crimson px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-crimson-dark"
            >
              Get Your Custom Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
