'use client';

import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Activity, Target, AlertCircle } from 'lucide-react';

export default function FinancialDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Données financières par année
  const financialData = [
    { year: 2020, ca: 257.019, resultat: 6.507, totalActif: 52.988, totalPassif: 52.988, capitaux: 29.407 },
    { year: 2021, ca: 526.497, resultat: 13.152, totalActif: 427.210, totalPassif: 427.210, capitaux: 42.560 },
    { year: 2022, ca: 231.063, resultat: 13.548, totalActif: 682.543, totalPassif: 682.543, capitaux: 56.108 },
    { year: 2023, ca: 135.840, resultat: -17.931, totalActif: 526.259, totalPassif: 526.259, capitaux: 38.177 },
    { year: 2024, ca: 249.550, resultat: -7.667, totalActif: 579.886, totalPassif: 579.886, capitaux: 30.510 },
  ];

  // Calcul des ratios
  const calculateRatios = () => {
    return financialData.map(year => ({
      year: year.year,
      margeNette: ((year.resultat / year.ca) * 100).toFixed(2),
      roe: ((year.resultat / year.capitaux) * 100).toFixed(2),
      roa: ((year.resultat / year.totalActif) * 100).toFixed(2),
      leverage: (year.totalPassif / year.capitaux).toFixed(2),
    }));
  };

  const ratios = calculateRatios();

  // KPIs
  const latestYear = financialData[financialData.length - 1];
  const previousYear = financialData[financialData.length - 2];
  const caGrowth = (((latestYear.ca - previousYear.ca) / previousYear.ca) * 100).toFixed(2);
  const resultatGrowth = (((latestYear.resultat - previousYear.resultat) / Math.abs(previousYear.resultat)) * 100).toFixed(2);

  const KPICard = ({ icon: Icon, label, value, change, positive }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-600 text-sm font-semibold">{label}</h3>
        <Icon className="text-blue-500" size={20} />
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className={`text-sm mt-1 ${positive ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
        {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        {change}%
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Tableau de Bord Financier - EDF-SARL</h1>
        <p className="text-gray-600">Analyse financière 2020-2024</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <KPICard 
          icon={DollarSign} 
          label="Chiffre d'Affaires 2024" 
          value={`${latestYear.ca}M`} 
          change={caGrowth} 
          positive={caGrowth > 0}
        />
        <KPICard 
          icon={Activity} 
          label="Résultat Net 2024" 
          value={`${latestYear.resultat}M`} 
          change={resultatGrowth} 
          positive={latestYear.resultat > previousYear.resultat}
        />
        <KPICard 
          icon={Target} 
          label="Total Actif 2024" 
          value={`${latestYear.totalActif}M`} 
          change={(((latestYear.totalActif - previousYear.totalActif) / previousYear.totalActif) * 100).toFixed(2)} 
          positive={latestYear.totalActif > previousYear.totalActif}
        />
        <KPICard 
          icon={AlertCircle} 
          label="Capitaux Propres 2024" 
          value={`${latestYear.capitaux}M`} 
          change={(((latestYear.capitaux - previousYear.capitaux) / previousYear.capitaux) * 100).toFixed(2)} 
          positive={latestYear.capitaux > previousYear.capitaux}
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        {[
          { id: 'overview', label: 'Vue d\'ensemble' },
          { id: 'trends', label: 'Tendances' },
          { id: 'ratios', label: 'Ratios Financiers' },
          { id: 'analysis', label: 'Analyse Détaillée' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Vue d'ensemble */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CA et Résultat */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Chiffre d'Affaires et Résultat</h2>
                <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                  📌 <strong>Explication :</strong> Ce graphique montre les revenus (bleu) et les bénéfices/pertes (rouge) de l'entreprise année par année. 
                  Quand la ligne rouge monte, l'entreprise gagne de l'argent. Quand elle descend, elle perd de l'argent. 
                  L'entreprise a gagné de l'argent en 2020-2022, mais a commencé à perdre en 2023-2024 malgré les revenus.
                </p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="ca" stroke="#3b82f6" name="CA (M)" />
                  <Line yAxisId="right" type="monotone" dataKey="resultat" stroke="#ef4444" name="Résultat (M)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Actif et Passif */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Actif vs Passif</h2>
                <p className="text-sm text-gray-600 bg-green-50 p-3 rounded">
                  📌 <strong>Explication :</strong> L'Actif (vert) = tout ce que l'entreprise possède (bâtiments, machines, argent).
                  Le Passif (orange) = tout ce que l'entreprise doit (emprunts, dettes). Les deux colonnes sont identiques car : 
                  <strong> Ce qu'on possède = Ce qu'on a emprunté + Ce qu'on a investi.</strong> 
                  La croissance depuis 2020 montre que l'entreprise achète beaucoup d'équipements mais s'endette aussi.
                </p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="totalActif" fill="#10b981" name="Total Actif" />
                  <Bar dataKey="totalPassif" fill="#f59e0b" name="Total Passif" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Capitaux Propres */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Évolution des Capitaux Propres</h2>
                <p className="text-sm text-gray-600 bg-purple-50 p-3 rounded">
                  📌 <strong>Explication :</strong> Les Capitaux Propres (argent des propriétaires) montent et descendent avec les résultats.
                  Quand l'entreprise gagne de l'argent, ses capitaux propres augmentent. Quand elle perd, ils diminuent.
                  Depuis 2023, ils baissent beaucoup (-30% en 2024) car l'entreprise perd de l'argent. C'est préoccupant !
                </p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="capitaux" stroke="#8b5cf6" name="Capitaux Propres (M)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Structure du Bilan 2024 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Structure du Bilan 2024</h2>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  📌 <strong>Explication :</strong> Ce camembert montre comment l'entreprise finance ses actifs.
                  La part verte = argent des propriétaires (30.5M). La part rouge = argent emprunté (549.4M).
                  <strong> L'entreprise dépend beaucoup des emprunts !</strong> 
                  Idéalement, ces deux parts devraient être plus équilibrées pour une meilleure stabilité.
                </p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Capitaux Propres', value: latestYear.capitaux },
                      { name: 'Passif', value: latestYear.totalPassif - latestYear.capitaux },
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value.toFixed(1)}M`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    <Cell fill="#10b981" />
                    <Cell fill="#ef4444" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Tendances */}
        {activeTab === 'trends' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tendances 5 ans</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Croissance du CA</h3>
                <p className="text-xs text-gray-600 bg-blue-50 p-2 rounded mb-3">
                  💡 Les revenus montent en 2021 (526M) puis baissent drastiquement. En 2024, il y a une reprise (+84% vs 2023) mais c'est insuffisant par rapport au pic de 2021.
                </p>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={financialData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="ca" fill="#3b82f6" name="Chiffre d'Affaires (M)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Profitabilité</h3>
                <p className="text-xs text-gray-600 bg-red-50 p-2 rounded mb-3">
                  ⚠️ Les résultats positifs en 2020-2022 deviennent négatifs en 2023-2024. Même avec une reprise du CA en 2024, l'entreprise continue de perdre de l'argent.
                </p>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={financialData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="resultat" fill="#10b981" name="Résultat Net (M)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Ratios Financiers */}
        {activeTab === 'ratios' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Ratios de Rentabilité</h2>
              <div className="bg-yellow-50 p-3 rounded mb-4 text-sm text-gray-700">
                <p><strong>Qu'est-ce que ces ratios mesurent ?</strong></p>
                <ul className="mt-2 space-y-1 text-xs">
                  <li>🟦 <strong>Marge Nette :</strong> Quel % du CA devient profit. Une marge saine = 10-15%. Celle-ci est négative en 2023-2024 ❌</li>
                  <li>🟩 <strong>ROE (Retour sur Capitaux) :</strong> Combien gagne l'entreprise sur chaque franc investi par les propriétaires. Négatif = perte ❌</li>
                  <li>🟨 <strong>ROA (Retour sur Actifs) :</strong> Combien gagne l'entreprise sur chaque franc d'actifs. Plus élevé = mieux ✓</li>
                </ul>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ratios}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="margeNette" stroke="#3b82f6" name="Marge Nette (%)" />
                  <Line type="monotone" dataKey="roe" stroke="#10b981" name="ROE (%)" />
                  <Line type="monotone" dataKey="roa" stroke="#f59e0b" name="ROA (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Ratio d'Endettement</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ratios}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leverage" fill="#ef4444" name="Ratio d'Endettement" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Tableau des Ratios</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Année</th>
                      <th className="px-4 py-2 text-right">Marge Nette (%)</th>
                      <th className="px-4 py-2 text-right">ROE (%)</th>
                      <th className="px-4 py-2 text-right">ROA (%)</th>
                      <th className="px-4 py-2 text-right">Leverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ratios.map(row => (
                      <tr key={row.year} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 font-semibold">{row.year}</td>
                        <td className="px-4 py-2 text-right">{row.margeNette}</td>
                        <td className="px-4 py-2 text-right">{row.roe}</td>
                        <td className="px-4 py-2 text-right">{row.roa}</td>
                        <td className="px-4 py-2 text-right">{row.leverage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Analyse Détaillée */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <h2 className="text-xl font-bold text-blue-900 mb-4">📊 Points Clés de l'Analyse</h2>
              <ul className="space-y-3 text-blue-800">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span><strong>Volatilité du CA :</strong> Le chiffre d'affaires a connu une croissance importante en 2021 (526.5M) mais a diminué en 2023-2024, indiquant une instabilité dans les opérations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span><strong>Rentabilité dégradée :</strong> Le résultat net est passé négatif en 2023-2024 (-17.9M et -7.7M), malgré une reprise du CA en 2024.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">3.</span>
                  <span><strong>Croissance de l'actif :</strong> L'actif total a augmenté de 580M en 2024 vs 53M en 2020, reflétant une expansion significative des investissements.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">4.</span>
                  <span><strong>Fragilité des capitaux propres :</strong> Les capitaux propres ont diminué à 30.5M en 2024 (point le plus bas), réduisant la solvabilité.</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <h2 className="text-xl font-bold text-green-900 mb-4">✅ Points Forts</h2>
              <ul className="space-y-2 text-green-800">
                <li>✓ Expansion significative des actifs (croissance de 11x depuis 2020)</li>
                <li>✓ Persistance de l'activité malgré les fluctuations de marché</li>
                <li>✓ Reprise du CA en 2024 (+83.5% vs 2023)</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <h2 className="text-xl font-bold text-red-900 mb-4">⚠️ Points de Préoccupation</h2>
              <ul className="space-y-2 text-red-800">
                <li>✗ Deux années consécutives de perte (2023-2024)</li>
                <li>✗ Déclin des capitaux propres (-20% en 2024)</li>
                <li>✗ Ratio d'endettement élevé (19.1x en 2024)</li>
                <li>✗ Charges financières en hausse (18.6M en 2024)</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
              <h2 className="text-xl font-bold text-amber-900 mb-4">💡 Recommandations Stratégiques</h2>
              <ul className="space-y-2 text-amber-800">
                <li>1. <strong>Optimiser la profitabilité :</strong> Réduire les charges opérationnelles et améliorer les marges commerciales</li>
                <li>2. <strong>Gérer l'endettement :</strong> Rembourser progressivement les emprunts pour réduire le leverage</li>
                <li>3. <strong>Stabiliser le CA :</strong> Développer une base clientèle plus stable et diversifiée</li>
                <li>4. <strong>Renforcer les capitaux :</strong> Générer des résultats positifs pour reconstituer les réserves</li>
                <li>5. <strong>Analyser les charges :</strong> Examiner les frais financiers (18.6M) qui grèvent significativement les résultats</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
        <p>Dashboard Financier - EDF-SARL | Données: 2020-2024 | Tous les montants en Millions de F CFA</p>
      </div>
    </div>
  );
}