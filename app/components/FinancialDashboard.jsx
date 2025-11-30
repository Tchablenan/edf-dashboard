'use client';

import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, XCircle, Activity, Target, AlertCircle, ArrowRight } from 'lucide-react';

// Import des données
import { 
  companyInfo, 
  compteResultat, 
  bilanActif, 
  bilanPassif,
  ratiosFinanciers,
  graphData,
  diagnostic,
  scoreGlobal
} from '../data/financialData';

const FinancialDashboard = () => {
  const [activeTab, setActiveTab] = useState('sante');

  const formatCurrency = (value) => {
    const absValue = Math.abs(value);
    const formatted = new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(absValue);
    return (value < 0 ? '-' : '') + formatted + ' FCFA';
  };

  const formatMillions = (value) => {
    return (value / 1000000).toFixed(2) + ' M';
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="font-semibold">{payload[0].payload.name || payload[0].payload.periode}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Données pour le radar de santé
  const radarData = [
    { subject: 'Liquidité', score: scoreGlobal[2024].liquidite, fullMark: 100 },
    { subject: 'Solvabilité', score: scoreGlobal[2024].solvabilite, fullMark: 100 },
    { subject: 'Rentabilité', score: scoreGlobal[2024].rentabilite, fullMark: 100 },
    { subject: 'Efficacité', score: scoreGlobal[2024].efficacite, fullMark: 100 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{companyInfo.sigle}</h1>
              <p className="text-blue-100 text-sm mt-1">{companyInfo.name}</p>
            </div>
            <div className="text-right">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <p className="text-sm text-blue-100">Score de Santé Financière</p>
                <p className="text-4xl font-bold">{scoreGlobal[2024].global}/100</p>
                <p className="text-xs text-blue-100 mt-1">{scoreGlobal[2024].appreciation}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="flex space-x-2 border-b border-gray-200 bg-white rounded-t-lg px-4 overflow-x-auto">
          {[
            { id: 'sante', label: 'Santé Financière', icon: Activity },
            { id: 'diagnostic', label: 'Diagnostic', icon: AlertTriangle },
            { id: 'ratios', label: 'Ratios Détaillés', icon: Target },
            { id: 'donnees', label: 'Données Financières', icon: TrendingUp },
            { id: 'recommandations', label: 'Recommandations', icon: ArrowRight }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* TAB: Santé Financière */}
        {activeTab === 'sante' && (
          <div className="space-y-6">
            
            {/* Score Radar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Évaluation Globale</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Score 2024" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {radarData.map((item) => (
                    <div key={item.subject} className="text-center">
                      <p className="text-sm text-gray-600">{item.subject}</p>
                      <p className={`text-2xl font-bold ${item.score >= 70 ? 'text-green-600' : item.score >= 40 ? 'text-orange-600' : 'text-red-600'}`}>
                        {item.score}/100
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicateurs Clés */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Indicateurs Clés 2024</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">Chiffre d'Affaires</p>
                      <p className="text-2xl font-bold text-green-700">{formatMillions(compteResultat.chiffreAffaires[2024])}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-green-600 font-semibold text-lg">+83.7%</span>
                      <CheckCircle className="w-6 h-6 text-green-600 inline ml-2" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">EBE (Rentabilité Opérationnelle)</p>
                      <p className="text-2xl font-bold text-blue-700">{formatMillions(compteResultat.excedentBrutExploitation[2024])}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-blue-600 font-semibold">26.1% CA</span>
                      <CheckCircle className="w-6 h-6 text-blue-600 inline ml-2" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">Résultat Net</p>
                      <p className="text-2xl font-bold text-orange-700">{formatMillions(compteResultat.resultatNet[2024])}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-orange-600 font-semibold">Perte -57%</span>
                      <AlertCircle className="w-6 h-6 text-orange-600 inline ml-2" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">Autonomie Financière</p>
                      <p className="text-2xl font-bold text-red-700">{ratiosFinanciers.solvabilite.autonomieFinanciere[2024]}%</p>
                    </div>
                    <div className="text-right">
                      <span className="text-red-600 font-semibold">CRITIQUE</span>
                      <XCircle className="w-6 h-6 text-red-600 inline ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Évolution CA et Résultats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Évolution Financière</h2>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={graphData.evolutionCA}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="periode" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="ca" stroke="#3b82f6" strokeWidth={3} name="Chiffre d'Affaires" />
                  <Line type="monotone" dataKey="ebe" stroke="#10b981" strokeWidth={3} name="EBE" />
                  <Line type="monotone" dataKey="resultat" stroke="#ef4444" strokeWidth={3} name="Résultat Net" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Structure Bilan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Structure de l'Actif</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={graphData.repartitionActif2024}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, pourcentage }) => `${name}: ${pourcentage}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {graphData.repartitionActif2024.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Structure du Passif</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={graphData.repartitionPassif2024}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, pourcentage }) => `${name}: ${pourcentage}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {graphData.repartitionPassif2024.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 p-3 bg-red-50 rounded border-l-4 border-red-500">
                  <p className="text-sm text-red-800 font-semibold">⚠️ ALERTE: Capitaux propres seulement 5.3% du bilan</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: Diagnostic */}
        {activeTab === 'diagnostic' && (
          <div className="space-y-6">
            
            {/* Points Forts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Points Forts</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {diagnostic.pointsForts.map((point, index) => (
                  <div key={index} className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-bold text-green-900 mb-2">{point.titre}</h3>
                    <p className="text-sm text-gray-700 mb-2">{point.detail}</p>
                    <p className="text-xs text-green-700 font-semibold">Impact: {point.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Points Faibles */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Points Faibles & Risques</h2>
              </div>
              <div className="space-y-4">
                {diagnostic.pointsFaibles.map((point, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    point.priorite === 'CRITIQUE' ? 'bg-red-50 border-red-500' :
                    point.priorite === 'URGENT' ? 'bg-orange-50 border-orange-500' :
                    'bg-yellow-50 border-yellow-500'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-gray-900">{point.titre}</h3>
                          <span className={`px-2 py-1 text-xs font-bold rounded ${
                            point.priorite === 'CRITIQUE' ? 'bg-red-200 text-red-900' :
                            point.priorite === 'URGENT' ? 'bg-orange-200 text-orange-900' :
                            'bg-yellow-200 text-yellow-900'
                          }`}>{point.priorite}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-1">{point.detail}</p>
                        <p className="text-xs text-gray-600 italic">⚠️ {point.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risques */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Analyse des Risques</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {diagnostic.risques.map((risque, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    risque.niveau === 'ÉLEVÉ' ? 'border-red-500 bg-red-50' :
                    risque.niveau === 'MOYEN' ? 'border-orange-500 bg-orange-50' :
                    'border-yellow-500 bg-yellow-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{risque.type}</h3>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        risque.niveau === 'ÉLEVÉ' ? 'bg-red-200 text-red-900' :
                        risque.niveau === 'MOYEN' ? 'bg-orange-200 text-orange-900' :
                        'bg-yellow-200 text-yellow-900'
                      }`}>{risque.niveau}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{risque.description}</p>
                    <p className="text-xs text-gray-600 font-semibold">→ {risque.consequence}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Ratios Détaillés */}
        {activeTab === 'ratios' && (
          <div className="space-y-6">
            
            {/* Ratios de Liquidité */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Ratios de Liquidité</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(ratiosFinanciers.liquidite).map(([key, ratio]) => (
                  key !== 'joursTresorerie' && (
                    <div key={key} className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">{ratio.interpretation}</p>
                      <div className="flex justify-between items-end mb-2">
                        <div>
                          <p className="text-3xl font-bold text-green-700">{ratio[2024]}</p>
                          <p className="text-xs text-gray-500">2023: {ratio[2023]}</p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <p className="text-xs text-gray-600">Seuil: {ratio.seuil}</p>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Ratios de Solvabilité */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Ratios de Solvabilité</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(ratiosFinanciers.solvabilite).map(([key, ratio]) => (
                  key !== 'capaciteRemboursement' && (
                    <div key={key} className={`p-4 rounded-lg ${
                      ratio.statut === 'critique' ? 'bg-red-50' : 'bg-orange-50'
                    }`}>
                      <p className="text-sm font-semibold text-gray-800 mb-2">{ratio.interpretation}</p>
                      <div className="flex justify-between items-end mb-2">
                        <div>
                          <p className={`text-3xl font-bold ${
                            ratio.statut === 'critique' ? 'text-red-700' : 'text-orange-700'
                          }`}>{ratio[2024]}{key.includes('taux') ? '%' : ''}</p>
                          <p className="text-xs text-gray-500">2023: {ratio[2023]}{key.includes('taux') ? '%' : ''}</p>
                        </div>
                        <XCircle className={`w-8 h-8 ${
                          ratio.statut === 'critique' ? 'text-red-600' : 'text-orange-600'
                        }`} />
                      </div>
                      <p className="text-xs text-gray-600">Seuil recommandé: {ratio.seuil}</p>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Ratios de Rentabilité */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Ratios de Rentabilité</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={graphData.evolutionMarges}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="periode" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="margeCommerciale" fill="#3b82f6" name="Marge Commerciale %" />
                  <Bar dataKey="margeEBE" fill="#10b981" name="Marge EBE %" />
                  <Bar dataKey="margeNette" fill="#ef4444" name="Marge Nette %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* TAB: Données Financières */}
        {activeTab === 'donnees' && (
          <div className="space-y-6">
            
            {/* Bilan Actif */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h3 className="text-xl font-bold">BILAN - ACTIF</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poste</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">2024</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">2023</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Variation</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">ACTIF IMMOBILISÉ</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanActif.totalActifImmobilise[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanActif.totalActifImmobilise[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 font-semibold">-5.8%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Terrains</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.immobilisationsCorporelles.terrains[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanActif.immobilisationsCorporelles.terrains[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Bâtiments</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.immobilisationsCorporelles.batiments[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanActif.immobilisationsCorporelles.batiments[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">-9.0%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Matériel & Mobilier</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.immobilisationsCorporelles.materielMobilier[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanActif.immobilisationsCorporelles.materielMobilier[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">-18.8%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Matériel de Transport</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.immobilisationsCorporelles.materielTransport[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanActif.immobilisationsCorporelles.materielTransport[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">-79.7%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Avances sur Immobilisations</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.avancesImmobilisation[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanActif.avancesImmobilisation[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">Nouveau</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Immobilisations Financières</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.immobilisationsFinancieres[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanActif.immobilisationsFinancieres[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">Nouveau</td>
                    </tr>
                    
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">ACTIF CIRCULANT</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanActif.totalActifCirculant[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanActif.totalActifCirculant[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600 font-semibold">+8.0%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Stocks</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.stocksEtEncours[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanActif.stocksEtEncours[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">+13.4%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Clients</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.creances.clients[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanActif.creances.clients[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">0%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Fournisseurs Avances</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.creances.fournisseursAvances[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanActif.creances.fournisseursAvances[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">Nouveau</td>
                    </tr>
                    
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">TRÉSORERIE ACTIF</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanActif.tresorerieActif[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanActif.tresorerieActif[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600 font-semibold">+358.2%</td>
                    </tr>
                    
                    <tr className="bg-green-100 font-bold">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">TOTAL ACTIF</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.totalGeneral[2024].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanActif.totalGeneral[2023].net)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">+10.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bilan Passif */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
                <h3 className="text-xl font-bold">BILAN - PASSIF</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poste</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">2024</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">2023</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Variation</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">CAPITAUX PROPRES</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanPassif.capitauxPropres.total[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanPassif.capitauxPropres.total[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 font-semibold">-20.1%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Capital</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanPassif.capitauxPropres.capital[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanPassif.capitauxPropres.capital[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Réserves Libres</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanPassif.capitauxPropres.reservesLibres[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanPassif.capitauxPropres.reservesLibres[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">0%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Report à Nouveau</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanPassif.capitauxPropres.reportNouveau[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanPassif.capitauxPropres.reportNouveau[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">-35.1%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Résultat Net</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 font-semibold">{formatCurrency(bilanPassif.capitauxPropres.resultatNet[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">{formatCurrency(bilanPassif.capitauxPropres.resultatNet[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">+57.2%</td>
                    </tr>
                    
                    <tr className="bg-orange-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">DETTES FINANCIÈRES</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanPassif.dettesFinancieres.total[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanPassif.dettesFinancieres.total[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-orange-600 font-semibold">+114.0%</td>
                    </tr>
                    
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">PASSIF CIRCULANT</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanPassif.passifCirculant.total[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(bilanPassif.passifCirculant.total[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600 font-semibold">-4.4%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Fournisseurs d'Exploitation</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanPassif.passifCirculant.fournisseursExploitation[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanPassif.passifCirculant.fournisseursExploitation[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">-23.9%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Clients, Avances Reçues</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanPassif.passifCirculant.clientsAvancesRecues[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanPassif.passifCirculant.clientsAvancesRecues[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">Nouveau</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">Dettes Fiscales et Sociales</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanPassif.passifCirculant.dettesFiscalesSociales[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{formatCurrency(bilanPassif.passifCirculant.dettesFiscalesSociales[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-orange-600">+29.1%</td>
                    </tr>
                    
                    <tr className="bg-green-100 font-bold">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">TOTAL PASSIF</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanPassif.totalGeneral[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{formatCurrency(bilanPassif.totalGeneral[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">+10.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Compte de Résultat */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <h3 className="text-xl font-bold">COMPTE DE RÉSULTAT</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Libellé</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">2024</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">2023</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Évolution</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">CHIFFRE D'AFFAIRES</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(compteResultat.chiffreAffaires[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">{formatCurrency(compteResultat.chiffreAffaires[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600">+83.7%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Autres achats</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.autresAchats[2024]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.autresAchats[2023]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">-</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Services extérieurs</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.servicesExterieurs[2024]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.servicesExterieurs[2023]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Impôts et taxes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.impotsTaxes[2024]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.impotsTaxes[2023]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">-</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">VALEUR AJOUTÉE</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">{formatCurrency(compteResultat.valeurAjoutee[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">{formatCurrency(compteResultat.valeurAjoutee[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-green-600">+18.5%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Charges de personnel</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.chargesPersonnel[2024]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.chargesPersonnel[2023]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">-</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">EXCÉDENT BRUT D'EXPLOITATION</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">{formatCurrency(compteResultat.excedentBrutExploitation[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">{formatCurrency(compteResultat.excedentBrutExploitation[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-green-600">+13.1%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dotations amortissements</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.dotationsAmortissements[2024]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.dotationsAmortissements[2023]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">-</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">RÉSULTAT D'EXPLOITATION</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">{formatCurrency(compteResultat.resultatExploitation[2024])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">{formatCurrency(compteResultat.resultatExploitation[2023])}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-green-600">+144.2%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Frais financiers</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.fraisFinanciers[2024]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.fraisFinanciers[2023]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">-15.8%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">RÉSULTAT FINANCIER</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-red-600">({formatCurrency(Math.abs(compteResultat.resultatFinancier[2024]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-red-600">({formatCurrency(Math.abs(compteResultat.resultatFinancier[2023]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">+15.8%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">RÉSULTAT ACTIVITÉS ORDINAIRES</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-red-600">({formatCurrency(Math.abs(compteResultat.resultatActivitesOrdinaires[2024]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-red-600">({formatCurrency(Math.abs(compteResultat.resultatActivitesOrdinaires[2023]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">+68.8%</td>
                    </tr>
                    <tr className="bg-red-100 font-bold">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">RÉSULTAT NET</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.resultatNet[2024]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">({formatCurrency(Math.abs(compteResultat.resultatNet[2023]))})</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">+57.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB: Recommandations */}
        {activeTab === 'recommandations' && (
          <div className="space-y-6">
            
            {/* Plan d'Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-2">Plan d'Actions Prioritaires</h2>
              <p className="text-blue-100">Recommandations stratégiques pour redresser la situation financière</p>
            </div>

            {/* Recommandations */}
            {diagnostic.recommandations.map((rec, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                    rec.priorite === 1 ? 'bg-red-600' :
                    rec.priorite === 2 ? 'bg-orange-600' :
                    rec.priorite === 3 ? 'bg-yellow-600' :
                    'bg-blue-600'
                  }`}>
                    {rec.priorite}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{rec.categorie}</h3>
                    <div className="bg-gray-50 rounded p-4 mb-3">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Actions à mettre en place:</p>
                      <ul className="space-y-2">
                        {rec.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-3">
                      <p className="text-sm font-semibold text-blue-900">🎯 Objectif: {rec.objectif}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Scénarios de Prévision */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Scénarios Prévisionnels 2025</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(diagnostic.scenariosPrevision).map(([type, scenario]) => (
                  <div key={type} className={`p-4 rounded-lg border-2 ${
                    type === 'optimiste' ? 'border-green-500 bg-green-50' :
                    type === 'realiste' ? 'border-blue-500 bg-blue-50' :
                    'border-red-500 bg-red-50'
                  }`}>
                    <h3 className="font-bold text-lg mb-2 capitalize">{type}</h3>
                    <p className="text-xs text-gray-600 mb-3">{scenario.hypotheses}</p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-gray-600">CA 2025</p>
                        <p className="text-lg font-bold">{formatMillions(scenario.ca2025)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Résultat Net</p>
                        <p className={`text-lg font-bold ${scenario.resultatNet2025 >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                          {formatMillions(scenario.resultatNet2025)}
                        </p>
                      </div>
                      <p className="text-xs font-semibold text-gray-700 mt-2">→ {scenario.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 mt-12 border-t border-gray-200 bg-white">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2"><span className="font-semibold">{companyInfo.sigle}</span> - {companyInfo.address}</p>
          <p className="text-xs text-gray-500">Dashboard d'Analyse Financière - Exercice {companyInfo.exerciseClos}</p>
        </div>
      </footer>
    </div>
  );
};

export default FinancialDashboard;