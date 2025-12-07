'use client';
import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { AlertTriangle, TrendingDown, Target, CheckCircle2, Clock, DollarSign, Users, Zap, Menu, X } from 'lucide-react';

export default function FinancialDecisionSystem() {
  const [activeTab, setActiveTab] = useState('diagnostic');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedAction, setExpandedAction] = useState(null);

  // Données financières historiques
  const historicalData = [
    { year: 2020, ca: 257.0, resultat: 6.5, charges: 250.5, actif: 53.0, dette: 23.6 },
    { year: 2021, ca: 526.5, resultat: 13.2, charges: 513.3, actif: 427.2, dette: 384.6 },
    { year: 2022, ca: 231.1, resultat: 13.5, charges: 217.5, actif: 682.5, dette: 626.4 },
    { year: 2023, ca: 135.8, resultat: -17.9, charges: 153.8, actif: 526.3, dette: 488.1 },
    { year: 2024, ca: 249.6, resultat: -7.7, charges: 257.2, actif: 579.9, dette: 549.4 },
  ];

  // Indicateurs de santé
  const healthIndicators = [
    { name: 'Profitabilité', score: 15, target: 80, status: 'critique', icon: '📉' },
    { name: 'Liquidité', score: 22, target: 75, status: 'critique', icon: '💧' },
    { name: 'Solvabilité', score: 12, target: 70, status: 'critique', icon: '🏦' },
    { name: 'Croissance', score: 45, target: 80, status: 'alerte', icon: '📊' },
    { name: 'Efficacité', score: 28, target: 75, status: 'critique', icon: '⚙️' },
  ];

  // Scénarios stratégiques
  const strategicScenarios = [
    {
      id: 1,
      title: 'Rétablir la Profitabilité',
      icon: '💰',
      priority: 'CRITIQUE',
      urgency: 'IMMÉDIAT (0-3 mois)',
      problem: 'Deux années consécutives de pertes (-17.9M en 2023, -7.7M en 2024) malgré un CA en croissance',
      target: 'Atteindre un résultat net positif de +10M en 6 mois',
      actions: [
        {
          step: 1,
          name: 'Audit complet des charges opérationnelles',
          details: 'Analyser les 257.2M de charges pour identifier réductions possibles (objectif: -15%)',
          cost: 'Faible',
          timeline: '2 semaines',
          impact: 'Réduction de 38.6M',
          responsible: 'PDG + Directeur Finances'
        },
        {
          step: 2,
          name: 'Plan d\'économies immédiat',
          details: 'Réduire: dépenses administratives (-20%), services externes (-25%), autres charges (-15%)',
          cost: 'Nul',
          timeline: '1 mois',
          impact: 'Économies: 38.6M',
          responsible: 'Direction générale'
        },
        {
          step: 3,
          name: 'Revoir la stratégie tarifaire',
          details: 'Augmenter les prix de vente de 8-12% progressivement (clients majeurs en priorité)',
          cost: 'Nul',
          timeline: '1 mois',
          impact: 'Revenus additionnels: 20-30M',
          responsible: 'Commercial + Direction générale'
        },
        {
          step: 4,
          name: 'Optimiser la structure de coûts',
          details: 'Eliminer services non-rentables, centraliser opérations, automatiser processus',
          cost: 'Moyen',
          timeline: '3 mois',
          impact: 'Réduction coûts permanente: 50-70M',
          responsible: 'Tous les directeurs'
        }
      ],
      expectedResults: [
        '✅ Retour à l\'équilibre en 3 mois',
        '✅ Profit net de +10M en 6 mois',
        '✅ Marge nette positive (>4%)',
        '✅ Stabilisation des capitaux propres'
      ],
      risks: [
        '⚠️ Fuite de clients si augmentation prix trop rapide',
        '⚠️ Réduction services pourrait affecter qualité',
        '⚠️ Délai d\'implémentation plus long que prévu'
      ],
      successMetrics: ['CA stable à 250M+', 'Marge nette >4%', 'Capitaux propres stables']
    },
    {
      id: 2,
      title: 'Réduire l\'Endettement Excessif',
      icon: '🏦',
      priority: 'CRITIQUE',
      urgency: 'COURT TERME (3-6 mois)',
      problem: 'Ratio d\'endettement anormal: 19 (normal: 1-2). Charges financières explosives: 18.6M/an',
      target: 'Ramener le ratio d\'endettement à 3-4 sur 2 ans',
      actions: [
        {
          step: 1,
          name: 'Audit détaillé de la dette',
          details: 'Lister tous les emprunts, taux d\'intérêt, conditions, échéances. Identifier les plus coûteux',
          cost: 'Nul',
          timeline: '1 semaine',
          impact: 'Vue claire de la structure',
          responsible: 'Directeur Finances'
        },
        {
          step: 2,
          name: 'Renégociation bancaire',
          details: 'Négocier baisse des taux avec banques (potentiel: -1 à 2% sur certains emprunts)',
          cost: 'Nul',
          timeline: '1 mois',
          impact: 'Économies: 5-10M/an',
          responsible: 'PDG + Directeur Finances'
        },
        {
          step: 3,
          name: 'Refinancement stratégique',
          details: 'Consolider petits emprunts en un seul, négocier meilleurs conditions sur volume',
          cost: 'Faible',
          timeline: '2 mois',
          impact: 'Réduction charges financières 20-30%',
          responsible: 'Directeur Finances'
        },
        {
          step: 4,
          name: 'Plan de remboursement agressif',
          details: 'À partir de la profitabilité rétablie, dédier 50% des bénéfices au remboursement',
          cost: 'Nul',
          timeline: '24 mois',
          impact: 'Ratio d\'endettement ramené à 3-4',
          responsible: 'Direction générale'
        }
      ],
      expectedResults: [
        '✅ Charges financières réduites de 5-10M',
        '✅ Ratio d\'endettement passé de 19 à 3-4',
        '✅ Amélioration notation crédit',
        '✅ Flexibilité financière accrue'
      ],
      risks: [
        '⚠️ Banques peuvent refuser renégociation',
        '⚠️ Clauses restrictives dans contrats',
        '⚠️ Peut nécessiter collatéraux additionnels'
      ],
      successMetrics: ['Charges financières <10M', 'Ratio endettement <4', 'Trésorerie positive']
    },
    {
      id: 3,
      title: 'Stabiliser le Chiffre d\'Affaires',
      icon: '📈',
      priority: 'HAUTE',
      urgency: 'COURT TERME (3-6 mois)',
      problem: 'Volatilité extrême: 257M (2020) → 526M (2021) → 135M (2023). Variation ±60% imprévisible',
      target: 'Atteindre croissance régulière 5-8%/an avec volatilité <10%',
      actions: [
        {
          step: 1,
          name: 'Analyse clientèle détaillée',
          details: 'Identifier clients majeurs (% CA), leur stabilité, risques de départ',
          cost: 'Nul',
          timeline: '2 semaines',
          impact: 'Intelligence marché',
          responsible: 'Directeur Commercial'
        },
        {
          step: 2,
          name: 'Contrats long-terme avec clients clés',
          details: 'Signer contrats pluriannuels (2-3 ans) avec top 10 clients (min 60% CA total)',
          cost: 'Nul',
          timeline: '3 mois',
          impact: 'CA stabilisé base de 150M',
          responsible: 'Commercial + PDG'
        },
        {
          step: 3,
          name: 'Diversification clientèle',
          details: 'Développer 3-4 nouveaux segments clients majeurs pour réduire dépendance',
          cost: 'Moyen',
          timeline: '6-9 mois',
          impact: 'Base client plus stable',
          responsible: 'Équipe commerciale'
        },
        {
          step: 4,
          name: 'Produits/services complémentaires',
          details: 'Créer offres packagées (services additionnels) pour augmenter panier moyen',
          cost: 'Moyen',
          timeline: '3 mois',
          impact: 'Augmentation CA de 15-20%',
          responsible: 'Product + Commercial'
        }
      ],
      expectedResults: [
        '✅ CA stable et prévisible (250-300M)',
        '✅ Croissance régulière 5-8%/an',
        '✅ Volatilité réduite à <10%',
        '✅ Meilleure planification opérationnelle'
      ],
      risks: [
        '⚠️ Clients majeurs peuvent refuser engagement long-terme',
        '⚠️ Diversification prend temps',
        '⚠️ Nouveaux clients nécessitent investissement acquisition'
      ],
      successMetrics: ['CA annuel stable', 'Top 10 clients sous contrat LT', 'Volatilité <10%']
    },
    {
      id: 4,
      title: 'Renforcer les Capitaux Propres',
      icon: '💪',
      priority: 'HAUTE',
      urgency: 'MOYEN TERME (6-12 mois)',
      problem: 'Capitaux propres effondrés: 56M (2022) → 30.5M (2024) soit -46% en un an. Solvabilité compromise',
      target: 'Reconstituer capitaux propres à 60M+ via rétention de bénéfices + apports',
      actions: [
        {
          step: 1,
          name: 'Politique de rétention de bénéfices',
          details: 'Rediriger 100% des bénéfices futurs vers reconstitution capitaux (zéro dividendes temporairement)',
          cost: 'Nul',
          timeline: '24 mois',
          impact: 'Capitaux propres +20-30M',
          responsible: 'Assemblée générale + PDG'
        },
        {
          step: 2,
          name: 'Apports en capital propriétaires',
          details: 'Demander apports additionnels des propriétaires (10-15M recommandé)',
          cost: 'Critique',
          timeline: '3-6 mois',
          impact: 'Capitaux propres +10-15M',
          responsible: 'PDG + Propriétaires'
        },
        {
          step: 3,
          name: 'Recherche d\'investisseurs stratégiques',
          details: 'Identifier investisseurs pouvant apporter capital + expertise (PE, fonds sectoriels)',
          cost: 'Moyen',
          timeline: '6-12 mois',
          impact: 'Capital frais + partenaire stratégique',
          responsible: 'PDG + Conseil'
        },
        {
          step: 4,
          name: 'Subventions et aides gouvernementales',
          details: 'Rechercher financements publics (PME, développement, innovation)',
          cost: 'Nul',
          timeline: '3-6 mois',
          impact: 'Capital additionnel gratuit 2-5M',
          responsible: 'Directeur Finances'
        }
      ],
      expectedResults: [
        '✅ Capitaux propres reconstitués à 60M+',
        '✅ Ratio d\'endettement approchant 2-3',
        '✅ Solidité financière améliorée',
        '✅ Accès au crédit facilité'
      ],
      risks: [
        '⚠️ Propriétaires peuvent refuser apports supplémentaires',
        '⚠️ Dilution du capital si investisseurs externes',
        '⚠️ Processus d\'investissement long et complexe'
      ],
      successMetrics: ['Capitaux propres 60M+', 'Ratio endettement <3', 'Solidité AAA']
    },
    {
      id: 5,
      title: 'Optimiser la Structure Opérationnelle',
      icon: '⚙️',
      priority: 'MOYENNE',
      urgency: 'MOYEN TERME (6-12 mois)',
      problem: 'Ratio charges/CA trop élevé: 103% en 2024 (normal: 80-85%). Inefficacité opérationnelle claire',
      target: 'Réduire ratio charges/CA à 85% (gain: 45M)',
      actions: [
        {
          step: 1,
          name: 'Audit opérationnel complet',
          details: 'Analyser tous les processus, identifier gaspillages, inefficacités, doublons',
          cost: 'Moyen',
          timeline: '1 mois',
          impact: 'Cartographie complète',
          responsible: 'Consultant externe + PDG'
        },
        {
          step: 2,
          name: 'Automatisation et digitalisation',
          details: 'Implémenter outils (ERP, RPA) pour réduire travail manuel (-30% charges admin)',
          cost: 'Élevé',
          timeline: '6 mois',
          impact: 'Réduction charges 30-40M',
          responsible: 'IT + Opérations'
        },
        {
          step: 3,
          name: 'Restructuration organisationnelle',
          details: 'Éliminer niveaux hiérarchiques inutiles, fusionner équipes redondantes',
          cost: 'Moyen',
          timeline: '3 mois',
          impact: 'Réduction charges RH 15-20M',
          responsible: 'HR + PDG'
        },
        {
          step: 4,
          name: 'Externalisation stratégique',
          details: 'Externaliser services non-core (accounting, IT, support) à prestataires spécialisés',
          cost: 'Faible',
          timeline: '3-6 mois',
          impact: 'Réduction charges 10-15M',
          responsible: 'PDG + Direction'
        }
      ],
      expectedResults: [
        '✅ Ratio charges/CA réduit à 85%',
        '✅ Gain opérationnel de 45M',
        '✅ Efficacité améliorée 25-30%',
        '✅ Scalabilité accrue'
      ],
      risks: [
        '⚠️ Résistance au changement des équipes',
        '⚠️ Coûts d\'implémentation IT élevés',
        '⚠️ Perte d\'expertise interne si externalisation mal gérée'
      ],
      successMetrics: ['Charges/CA = 85%', 'Productivité +25%', 'Coûts réduits de 45M']
    }
  ];

  // Roadmap temporelle
  const roadmap = [
    {
      phase: 1,
      title: 'URGENCES (0-3 mois)',
      color: 'bg-red-500',
      tasks: [
        '🔴 Audit charges financières et opérationnelles',
        '🔴 Plan d\'économies immédiat (-38M)',
        '🔴 Analyse clientèle détaillée',
        '🔴 Renégociation bancaire'
      ]
    },
    {
      phase: 2,
      title: 'COURT TERME (3-6 mois)',
      color: 'bg-orange-500',
      tasks: [
        '🟠 Implémentation plan économies',
        '🟠 Augmentation tarifaire progressive (+20-30M)',
        '🟠 Contrats long-terme clients majeurs',
        '🟠 Refinancement stratégique'
      ]
    },
    {
      phase: 3,
      title: 'MOYEN TERME (6-12 mois)',
      color: 'bg-yellow-500',
      tasks: [
        '🟡 Retour à profitabilité (+10M)',
        '🟡 Réduction ratio endettement 19→5',
        '🟡 Diversification clientèle',
        '🟡 Recherche investisseurs'
      ]
    },
    {
      phase: 4,
      title: 'LONG TERME (12-24 mois)',
      color: 'bg-green-500',
      tasks: [
        '🟢 Reconstitution capitaux propres 60M+',
        '🟢 Optimisation complète structure opérationnelle',
        '🟢 Stabilité financière (score >75)',
        '🟢 Croissance durable 5-8%/an'
      ]
    }
  ];

  // Composant pour action détaillée
  const ActionItem = ({ action, expanded, onExpand }) => (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-3 border-l-4 border-blue-500">
      <button
        onClick={() => onExpand(action.step)}
        className="w-full text-left flex items-start gap-3 hover:bg-white p-2 rounded transition"
      >
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
          {action.step}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900">{action.name}</h4>
          <p className="text-sm text-gray-600 mt-1">{action.details}</p>
          <div className="flex gap-3 mt-2 flex-wrap">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold">
              ⏱ {action.timeline}
            </span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
              💰 {action.cost}
            </span>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-semibold">
              📊 {action.impact}
            </span>
          </div>
        </div>
        <span className="text-gray-400">{expanded === action.step ? '▼' : '▶'}</span>
      </button>
      
      {expanded === action.step && (
        <div className="mt-4 pt-4 border-t border-gray-300 bg-white rounded p-3">
          <p className="text-sm text-gray-700 mb-3"><strong>Responsable:</strong> {action.responsible}</p>
          <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
            <p className="text-sm font-bold text-green-900">Résultat attendu:</p>
            <p className="text-sm text-green-800 mt-1">{action.impact}</p>
          </div>
        </div>
      )}
    </div>
  );

  // Affichage du contenu
  const renderContent = () => {
    if (activeTab === 'diagnostic') {
      return (
        <div className="space-y-6">
          {/* Score Global */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">🏥 Diagnostic Global de Santé Financière</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-white/80 mb-2">Score de Santé</p>
                <p className="text-5xl font-bold">24/100</p>
                <p className="text-sm mt-2 text-red-100">CRITIQUE - Action urgente requise</p>
              </div>
              <div>
                <p className="text-white/80 mb-2">Statut Financier</p>
                <p className="text-3xl font-bold">🚨 EN DÉTRESSE</p>
                <p className="text-sm mt-2">Deux années consécutives de perte</p>
              </div>
              <div>
                <p className="text-white/80 mb-2">Temps avant Insolvabilité</p>
                <p className="text-3xl font-bold">6-12 mois</p>
                <p className="text-sm mt-2">Sans intervention</p>
              </div>
            </div>
          </div>

          {/* Indicateurs de Santé */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Indicateurs de Santé</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={healthIndicators}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Score Actuel" dataKey="score" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                    <Radar name="Cible" dataKey="target" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {healthIndicators.map((indicator, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-900">{indicator.icon} {indicator.name}</span>
                      <span className={`font-bold ${indicator.score < 30 ? 'text-red-600' : indicator.score < 60 ? 'text-orange-600' : 'text-green-600'}`}>
                        {indicator.score}/{indicator.target}
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${indicator.score < 30 ? 'bg-red-600' : indicator.score < 60 ? 'bg-orange-500' : 'bg-green-600'}`}
                        style={{ width: `${(indicator.score / indicator.target) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Problèmes Identifiés */}
          <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-red-500">
            <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <AlertTriangle size={28} />
              🚨 Problèmes Critiques Identifiés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="font-bold text-red-900 mb-2">❌ Profitabilité Effondrée</p>
                <p className="text-sm text-gray-700">Perte de 17.9M (2023) et 7.7M (2024). Insoutenable.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="font-bold text-red-900 mb-2">❌ Endettement Excessif</p>
                <p className="text-sm text-gray-700">Ratio 19 (doit être 1-2). Dépendance totale aux emprunts.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="font-bold text-red-900 mb-2">❌ Capitaux Propres Érodés</p>
                <p className="text-sm text-gray-700">Baisse de 46% en un an. Solvabilité compromise.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="font-bold text-red-900 mb-2">❌ Charges Financières Explosives</p>
                <p className="text-sm text-gray-700">18.6M/an = 7% du CA. Insoutenable.</p>
              </div>
            </div>
          </div>

          {/* Graphiques */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 Évolution Historique</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">CA vs Résultat</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="ca" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="CA (M)" />
                    <Area type="monotone" dataKey="resultat" stackId="2" stroke="#ef4444" fill="#ef4444" name="Résultat (M)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Dépendance à la Dette</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="actif" fill="#10b981" name="Actif (M)" />
                    <Bar dataKey="dette" fill="#ef4444" name="Dette (M)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'decisions') {
      return (
        <div className="space-y-8">
          {strategicScenarios.map((scenario) => (
            <div key={scenario.id} className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-blue-600">
              {/* En-tête */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b-2">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                    {scenario.icon} {scenario.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{scenario.problem}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className={`px-4 py-2 rounded-full font-bold text-white text-sm ${scenario.priority === 'CRITIQUE' ? 'bg-red-600' : 'bg-orange-600'}`}>
                    {scenario.priority}
                  </span>
                  <span className="px-4 py-2 rounded-full font-bold text-white text-sm bg-blue-600">
                    {scenario.urgency}
                  </span>
                </div>
              </div>

              {/* Cible */}
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded mb-6">
                <p className="font-bold text-green-900 flex items-center gap-2 mb-2">
                  <CheckCircle2 size={20} />
                  Objectif
                </p>
                <p className="text-green-800">{scenario.target}</p>
              </div>

              {/* Actions */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Plan d'Action Détaillé</h3>
                <div className="space-y-3">
                  {scenario.actions.map((action) => (
                    <ActionItem
                      key={action.step}
                      action={action}
                      expanded={expandedAction === action.step}
                      onExpand={setExpandedAction}
                    />
                  ))}
                </div>
              </div>

              {/* Résultats et Risques */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <p className="font-bold text-green-900 mb-3">✅ Résultats Attendus</p>
                  <ul className="space-y-2">
                    {scenario.expectedResults.map((result, idx) => (
                      <li key={idx} className="text-sm text-green-800">{result}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                  <p className="font-bold text-orange-900 mb-3">⚠️ Risques</p>
                  <ul className="space-y-2">
                    {scenario.risks.map((risk, idx) => (
                      <li key={idx} className="text-sm text-orange-800">{risk}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Métriques de succès */}
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="font-bold text-blue-900 mb-3">📊 Comment Mesurer le Succès</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {scenario.successMetrics.map((metric, idx) => (
                    <li key={idx} className="text-sm text-blue-800 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'roadmap') {
      return (
        <div className="space-y-6">
          {/* Timeline */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🗓️ Feuille de Route Temporelle</h2>
            <div className="space-y-4">
              {roadmap.map((phase) => (
                <div key={phase.phase} className="border-l-4 border-gray-300">
                  <div className={`${phase.color} text-white p-4 rounded-r-lg`}>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Clock size={24} />
                      Phase {phase.phase}: {phase.title}
                    </h3>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2">
                          <span>•</span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investissement et Retours */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💹 Investissement vs Retour Attendu</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="text-sm text-gray-600 mb-2">Investissement Total</p>
                <p className="text-3xl font-bold text-blue-700">15-25M</p>
                <p className="text-xs text-gray-600 mt-2">Audit, IT, externalisation</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-600">
                <p className="text-sm text-gray-600 mb-2">Économies/Gains/An</p>
                <p className="text-3xl font-bold text-green-700">100-150M</p>
                <p className="text-xs text-gray-600 mt-2">Charges réduites + CA augmenté</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-600">
                <p className="text-sm text-gray-600 mb-2">ROI</p>
                <p className="text-3xl font-bold text-orange-700">400-600%</p>
                <p className="text-xs text-gray-600 mt-2">En 12 mois</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-600">
                <p className="text-sm text-gray-600 mb-2">Payback Period</p>
                <p className="text-3xl font-bold text-purple-700">2-3 mois</p>
                <p className="text-xs text-gray-600 mt-2">Récupération investissement</p>
              </div>
            </div>
          </div>

          {/* Hypothèses Clés */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Hypothèses Clés de Succès</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
                <p className="font-bold text-blue-900 mb-2">✅ Doit Être Assuré</p>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>✓ Engagement total de la direction</li>
                  <li>✓ Acceptation changes par équipes</li>
                  <li>✓ Rétention clients majeurs</li>
                  <li>✓ Pas de crises externes (marché)</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-600">
                <p className="font-bold text-orange-900 mb-2">⚠️ Points de Vigilance</p>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li>⚠ Délai implémentation peut glisser</li>
                  <li>⚠ Résistance interne au changement</li>
                  <li>⚠ Clients peuvent quitter</li>
                  <li>⚠ Banques peuvent durcir conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Zap size={32} />
              Système de Décision - EDF-SARL
            </h1>
            <p className="text-blue-100 mt-1">Analyse stratégique 2024 & Recommandations</p>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-slate-800 border-b border-slate-700 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row gap-2 p-4 ${mobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
            {[
              { id: 'diagnostic', label: '🏥 Diagnostic', icon: AlertTriangle },
              { id: 'decisions', label: '🎯 5 Scénarios Décision', icon: Target },
              { id: 'roadmap', label: '🗓️ Feuille Route', icon: Clock },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
                className={`px-6 py-3 font-bold rounded-lg transition ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto p-6">
        {renderContent()}
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-center text-slate-400 py-8 mt-12 border-t border-slate-700">
        <p className="text-sm">Système d'Aide à la Décision - EDF-SARL | 2024 | Données en Millions de F CFA</p>
        <p className="text-xs mt-2">Ce rapport doit être examiné avec les dirigeants et les parties prenantes pour validation</p>
      </div>
    </div>
  );
}