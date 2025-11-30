// app/data/financialData.js

export const companyInfo = {
  name: "ENTREPRISE DJANTCHIEME ET FORMATION OUVRIERE SARL",
  sigle: "EDF SARL",
  address: "BP 204 Nassable Dapaong TEL:90 04 70 26",
  fiscalId: "1 000 044 073",
  exerciseClos: "31/12/2024",
  duree: "12 mois",
  unitMonetaire: "F CFA"
};

// ============================================
// DONNÉES BRUTES DES ÉTATS FINANCIERS
// ============================================

// BILAN - ACTIF
export const bilanActif = {
  immobilisationsIncorporelles: {
    2024: { brut: 0, amort: 0, net: 0 },
    2023: { net: 0 }
  },
  immobilisationsCorporelles: {
    terrains: {
      2024: { brut: 5000000, amort: 0, net: 5000000 },
      2023: { net: 5000000 }
    },
    batiments: {
      2024: { brut: 17250000, amort: 8566250, net: 8693750 },
      2023: { net: 9556250 }
    },
    amenagements: {
      2024: { brut: 1130000, amort: 1130000, net: 0 },
      2023: { net: 0 }
    },
    materielMobilier: {
      2024: { brut: 67522432, amort: 39806817, net: 27715615 },
      2023: { net: 34137965 }
    },
    materielTransport: {
      2024: { brut: 289295286, amort: 278275479, net: 11019807 },
      2023: { net: 54253041 }
    },
    total: {
      2024: { brut: 413697718, amort: 327768546, net: 85929172 },
      2023: { net: 102947256 }
    }
  },
  avancesImmobilisation: {
    2024: { brut: 33500000, amort: 0, net: 33500000 },
    2023: { net: 0 }
  },
  immobilisationsFinancieres: {
    2024: { brut: 11087907, amort: 0, net: 11087907 },
    2023: { net: 0 }
  },
  totalActifImmobilise: {
    2024: { brut: 424785625, amort: 327768546, net: 97017079 },
    2023: { net: 102947256 }
  },
  stocksEtEncours: {
    2024: { brut: 23498420, amort: 0, net: 23498420 },
    2023: { net: 20717700 }
  },
  creances: {
    fournisseursAvances: {
      2024: { brut: 28980000, amort: 0, net: 28980000 },
      2023: { net: 0 }
    },
    clients: {
      2024: { brut: 392720181, amort: 0, net: 392720181 },
      2023: { net: 392720174 }
    },
    autresCreances: {
      2024: { brut: 4064519, amort: 0, net: 4064519 },
      2023: { net: 2537200 }
    },
    total: {
      2024: { net: 425764700 },
      2023: { net: 395257374 }
    }
  },
  totalActifCirculant: {
    2024: { net: 449263120 },
    2023: { net: 415975074 }
  },
  tresorerieActif: {
    2024: { net: 33606114 },
    2023: { net: 7336227 }
  },
  totalGeneral: {
    2024: { net: 579886313 },
    2023: { net: 526258557 }
  }
};

// BILAN - PASSIF
export const bilanPassif = {
  capitauxPropres: {
    capital: { 2024: 1000000, 2023: 1000000 },
    reservesLibres: { 2024: 4000000, 2023: 4000000 },
    reportNouveau: { 2024: 33176697, 2023: 51107802 },
    resultatNet: { 2024: -7666799, 2023: -17931105 },
    total: { 2024: 30509898, 2023: 38176697 }
  },
  dettesFinancieres: {
    emprunts: { 2024: 149454389, 2023: 69821737 },
    total: { 2024: 149454389, 2023: 69821737 }
  },
  totalRessourcesStables: {
    2024: 179964287,
    2023: 107998434
  },
  passifCirculant: {
    clientsAvancesRecues: { 2024: 99164388, 2023: 0 },
    fournisseursExploitation: { 2024: 244391694, 2023: 321304690 },
    dettesFiscalesSociales: { 2024: 25751577, 2023: 19953834 },
    autresDettes: { 2024: 30608243, 2023: 77001599 },
    total: { 2024: 399915902, 2023: 418260123 }
  },
  tresoreriePassif: {
    2024: 6124,
    2023: 0
  },
  totalGeneral: {
    2024: 579886313,
    2023: 526258557
  }
};

// COMPTE DE RÉSULTAT
export const compteResultat = {
  chiffreAffaires: { 2024: 249550213, 2023: 135840322 },
  autresAchats: { 2024: -132936322, 2023: -5128748 },
  variationStocks: { 2024: -2780720, 2023: 0 },
  transports: { 2024: -462200, 2023: -131750 },
  servicesExterieurs: { 2024: -27910433, 2023: -8576307 },
  impotsTaxes: { 2024: -13298397, 2023: -8701407 },
  autresCharges: { 2024: -56000, 2023: 0 },
  valeurAjoutee: { 2024: 77647581, 2023: 65551910 },
  chargesPersonnel: { 2024: -12606578, 2023: -8023200 },
  excedentBrutExploitation: { 2024: 65041003, 2023: 57528710 },
  dotationsAmortissements: { 2024: -51628184, 2023: -52035444 },
  reprisesAmortissements: { 2024: 0, 2023: 0 },
  resultatExploitation: { 2024: 13412819, 2023: 5493266 },
  fraisFinanciers: { 2024: -18584116, 2023: -22065968 },
  resultatFinancier: { 2024: -18584116, 2023: -22065968 },
  resultatActivitesOrdinaires: { 2024: -5171297, 2023: -16572702 },
  participationTravailleurs: { 2024: 2495502, 2023: 1358403 },
  resultatNet: { 2024: -7666799, 2023: -17931105 }
};

// FLUX DE TRÉSORERIE
export const fluxTresorerie = {
  tresorerieDebut: { 2024: 16306745, 2023: 16306745 },
  activitesOperationnelles: {
    cafGlobal: { 2024: 43961385, 2023: 34104339 },
    variationBFR: { 2024: -144081532, 2023: -92449265 },
    total: { 2024: -100120147, 2023: -58344926 }
  },
  activitesInvestissement: {
    acquisitionsCorporelles: { 2024: -34610100, 2023: 0 },
    acquisitionsFinancieres: { 2024: -13822640, 2023: -8316891 },
    total: { 2024: -48432740, 2023: -8316891 }
  },
  activitesFinancement: {
    emprunts: { 2024: 75178263, 2023: 106700000 },
    remboursements: { 2024: -75178263, 2023: -49374408 },
    subventions: { 2024: 0, 2023: 13548096 },
    total: { 2024: -73374624, 2023: -3739313 }
  },
  variationTresorerie: { 2024: -57067879, 2023: 12567432 },
  tresorerieFin: { 2024: 57067879, 2023: 12567432 }
};

// ============================================
// RATIOS ET INDICATEURS CALCULÉS
// ============================================

export const ratiosFinanciers = {
  // Ratios de Liquidité
  liquidite: {
    ratioLiquiditeGenerale: {
      2024: ((449263120 + 33606114) / 399915902).toFixed(2), // 1.21
      2023: ((415975074 + 7336227) / 418260123).toFixed(2), // 1.01
      seuil: 1.0,
      statut: 'bon',
      interpretation: 'Capacité à payer les dettes à court terme'
    },
    ratioLiquiditeReduite: {
      2024: ((449263120 - 23498420 + 33606114) / 399915902).toFixed(2), // 1.15
      2023: ((415975074 - 20717700 + 7336227) / 418260123).toFixed(2), // 0.96
      seuil: 0.8,
      statut: 'bon',
      interpretation: 'Liquidité sans les stocks'
    },
    joursTresorerie: {
      2024: Math.round((33606114 / 249550213) * 365), // 49 jours
      2023: Math.round((7336227 / 135840322) * 365), // 20 jours
      statut: 'amelioration'
    }
  },

  // Ratios de Solvabilité
  solvabilite: {
    autonomieFinanciere: {
      2024: (30509898 / 579886313 * 100).toFixed(1), // 5.3%
      2023: (38176697 / 526258557 * 100).toFixed(1), // 7.3%
      seuil: 30,
      statut: 'critique',
      interpretation: 'Part des capitaux propres - TROP FAIBLE'
    },
    tauxEndettement: {
      2024: ((149454389 + 399915902) / 579886313 * 100).toFixed(1), // 94.7%
      2023: ((69821737 + 418260123) / 526258557 * 100).toFixed(1), // 92.7%
      seuil: 70,
      statut: 'critique',
      interpretation: 'Trop endetté - RISQUE ÉLEVÉ'
    },
    ratioEndettementFinancier: {
      2024: (149454389 / 30509898).toFixed(2), // 4.90
      2023: (69821737 / 38176697).toFixed(2), // 1.83
      seuil: 2.0,
      statut: 'critique',
      interpretation: 'Dette financière / Capitaux propres'
    },
    capaciteRemboursement: {
      2024: (149454389 / 43961385).toFixed(1), // 3.4 ans
      2023: (69821737 / 34104339).toFixed(1), // 2.0 ans
      seuil: 3.0,
      statut: 'moyen',
      interpretation: 'Années pour rembourser avec CAF'
    }
  },

  // Ratios de Rentabilité
  rentabilite: {
    margeCommerciale: {
      2024: ((249550213 - 132936322) / 249550213 * 100).toFixed(1), // 46.7%
      2023: ((135840322 - 5128748) / 135840322 * 100).toFixed(1), // 96.2%
      statut: 'bon'
    },
    tauxValeurAjoutee: {
      2024: (77647581 / 249550213 * 100).toFixed(1), // 31.1%
      2023: (65551910 / 135840322 * 100).toFixed(1), // 48.3%
      statut: 'moyen'
    },
    margeEBE: {
      2024: (65041003 / 249550213 * 100).toFixed(1), // 26.1%
      2023: (57528710 / 135840322 * 100).toFixed(1), // 42.4%
      statut: 'bon',
      interpretation: 'Rentabilité opérationnelle'
    },
    margeOperationnelle: {
      2024: (13412819 / 249550213 * 100).toFixed(1), // 5.4%
      2023: (5493266 / 135840322 * 100).toFixed(1), // 4.0%
      statut: 'amelioration'
    },
    margeNette: {
      2024: (-7666799 / 249550213 * 100).toFixed(1), // -3.1%
      2023: (-17931105 / 135840322 * 100).toFixed(1), // -13.2%
      statut: 'probleme',
      interpretation: 'NÉGATIF mais en amélioration'
    },
    roa: {
      2024: (-7666799 / 579886313 * 100).toFixed(1), // -1.3%
      2023: (-17931105 / 526258557 * 100).toFixed(1), // -3.4%
      statut: 'probleme',
      interpretation: 'Rentabilité des actifs'
    },
    roe: {
      2024: (-7666799 / 30509898 * 100).toFixed(1), // -25.1%
      2023: (-17931105 / 38176697 * 100).toFixed(1), // -47.0%
      statut: 'probleme',
      interpretation: 'Rentabilité des capitaux propres'
    }
  },

  // Ratios d'Efficacité
  efficacite: {
    rotationActif: {
      2024: (249550213 / 579886313).toFixed(2), // 0.43
      2023: (135840322 / 526258557).toFixed(2), // 0.26
      statut: 'amelioration'
    },
    delaiPaiementClients: {
      2024: Math.round((392720181 / 249550213) * 365), // 574 jours
      2023: Math.round((392720174 / 135840322) * 365), // 1055 jours
      statut: 'critique',
      interpretation: 'BEAUCOUP TROP ÉLEVÉ - Problème de recouvrement'
    },
    delaiPaiementFournisseurs: {
      2024: Math.round((244391694 / 132936322) * 365), // 671 jours
      2023: Math.round((321304690 / 5128748) * 365), // 22871 jours (aberrant)
      statut: 'probleme'
    },
    rotationStocks: {
      2024: Math.round((23498420 / 249550213) * 365), // 34 jours
      2023: Math.round((20717700 / 135840322) * 365), // 56 jours
      statut: 'bon'
    }
  }
};

// ============================================
// BESOIN EN FONDS DE ROULEMENT (BFR)
// ============================================

export const besoinFondsRoulement = {
  2024: {
    actifCirculant: 449263120,
    stocksEtCreances: 449263120,
    passifCirculant: 399915902,
    bfr: 449263120 - 399915902, // 49 347 218
    joursBFR: Math.round(((449263120 - 399915902) / 249550213) * 365), // 72 jours
    statut: 'positif'
  },
  2023: {
    actifCirculant: 415975074,
    passifCirculant: 418260123,
    bfr: 415975074 - 418260123, // -2 285 049
    joursBFR: Math.round(((415975074 - 418260123) / 135840322) * 365),
    statut: 'negatif'
  }
};

// ============================================
// FONDS DE ROULEMENT (FR)
// ============================================

export const fondsRoulement = {
  2024: {
    ressourcesStables: 179964287,
    actifImmobilise: 97017079,
    fr: 179964287 - 97017079, // 82 947 208
    statut: 'positif',
    interpretation: 'Excédent pour financer le BFR'
  },
  2023: {
    ressourcesStables: 107998434,
    actifImmobilise: 102947256,
    fr: 107998434 - 102947256, // 5 051 178
    statut: 'faible'
  }
};

// ============================================
// DONNÉES POUR GRAPHIQUES
// ============================================

export const graphData = {
  evolutionCA: [
    { periode: '2023', ca: 135840322, resultat: -17931105, ebe: 57528710 },
    { periode: '2024', ca: 249550213, resultat: -7666799, ebe: 65041003 }
  ],
  
  bilanActifComparaison: [
    { name: 'Actif Immobilisé', 2024: 97017079, 2023: 102947256 },
    { name: 'Actif Circulant', 2024: 449263120, 2023: 415975074 },
    { name: 'Trésorerie', 2024: 33606114, 2023: 7336227 }
  ],
  
  bilanPassifComparaison: [
    { name: 'Capitaux Propres', 2024: 30509898, 2023: 38176697 },
    { name: 'Dettes Financières', 2024: 149454389, 2023: 69821737 },
    { name: 'Passif Circulant', 2024: 399915902, 2023: 418260123 }
  ],
  
  evolutionMarges: [
    { 
      periode: '2023',
      margeCommerciale: 96.2,
      margeEBE: 42.4,
      margeNette: -13.2
    },
    { 
      periode: '2024',
      margeCommerciale: 46.7,
      margeEBE: 26.1,
      margeNette: -3.1
    }
  ],

  repartitionActif2024: [
    { name: 'Actif Immobilisé', value: 97017079, pourcentage: 16.7, color: '#3b82f6' },
    { name: 'Actif Circulant', value: 449263120, pourcentage: 77.5, color: '#10b981' },
    { name: 'Trésorerie', value: 33606114, pourcentage: 5.8, color: '#f59e0b' }
  ],

  repartitionPassif2024: [
    { name: 'Capitaux Propres', value: 30509898, pourcentage: 5.3, color: '#8b5cf6' },
    { name: 'Dettes Financières', value: 149454389, pourcentage: 25.8, color: '#ef4444' },
    { name: 'Passif Circulant', value: 399915902, pourcentage: 69.0, color: '#f97316' }
  ]
};

// ============================================
// DIAGNOSTIC ET RECOMMANDATIONS
// ============================================

export const diagnostic = {
  pointsForts: [
    {
      titre: "Croissance exceptionnelle du CA",
      detail: "+83.7% de croissance, passant de 135.8M à 249.6M FCFA",
      impact: "Forte dynamique commerciale"
    },
    {
      titre: "Amélioration de la rentabilité opérationnelle",
      detail: "EBE en hausse de 13.1% à 65M FCFA",
      impact: "L'activité génère de la trésorerie"
    },
    {
      titre: "Réduction de la perte nette",
      detail: "Perte divisée par 2.3 (-57.2%)",
      impact: "Tendance vers l'équilibre"
    },
    {
      titre: "Amélioration de la liquidité",
      detail: "Ratio de liquidité générale de 1.21 (vs 1.01)",
      impact: "Meilleure capacité à payer les dettes courtes"
    },
    {
      titre: "Trésorerie en forte hausse",
      detail: "+358% de trésorerie active",
      impact: "Meilleure sécurité financière"
    }
  ],

  pointsFaibles: [
    {
      titre: "Résultat net encore négatif",
      detail: "Perte de 7.67M FCFA malgré un fort CA",
      impact: "Pas encore de rentabilité nette",
      priorite: "CRITIQUE"
    },
    {
      titre: "Autonomie financière très faible",
      detail: "Capitaux propres = 5.3% du bilan",
      impact: "Dépendance forte aux dettes",
      priorite: "CRITIQUE"
    },
    {
      titre: "Endettement financier excessif",
      detail: "Dette financière = 4.9x les capitaux propres (vs 1.8x)",
      impact: "Risque de défaut élevé",
      priorite: "CRITIQUE"
    },
    {
      titre: "Délais clients excessifs",
      detail: "574 jours de créances clients (1.6 ans)",
      impact: "Trésorerie immobilisée, risque d'impayés",
      priorite: "URGENT"
    },
    {
      titre: "BFR très élevé",
      detail: "BFR = 72 jours de CA",
      impact: "Besoin de financement important",
      priorite: "IMPORTANT"
    },
    {
      titre: "Charge de la dette",
      detail: "18.6M de frais financiers (vs 13.4M de résultat d'exploitation)",
      impact: "La dette annule la rentabilité opérationnelle",
      priorite: "CRITIQUE"
    }
  ],

  risques: [
    {
      type: "Risque de solvabilité",
      niveau: "ÉLEVÉ",
      description: "Capitaux propres insuffisants pour absorber les pertes futures",
      consequence: "Risque de faillite en cas de nouvelle perte importante"
    },
    {
      type: "Risque de liquidité",
      niveau: "MOYEN",
      description: "Dépendance aux renouvellements d'emprunts",
      consequence: "Difficulté si les banques refusent de refinancer"
    },
    {
      type: "Risque opérationnel",
      niveau: "MOYEN",
      description: "Créances clients très élevées",
      consequence: "Risque d'impayés massifs qui aggraveraient la situation"
    }
  ],

  recommandations: [
    {
      priorite: 1,
      categorie: "URGENCE - Renforcement des capitaux propres",
      actions: [
        "Augmentation de capital immédiate de minimum 50M FCFA",
        "Recherche d'investisseurs ou de subventions",
        "Incorporation des réserves disponibles"
      ],
      objectif: "Atteindre minimum 20% d'autonomie financière"
    },
    {
      priorite: 2,
      categorie: "CRITIQUE - Gestion des créances clients",
      actions: [
        "Mettre en place une politique stricte de recouvrement",
        "Factoring ou affacturage pour accélérer les encaissements",
        "Pénalités de retard systématiques",
        "Provisionnement des créances douteuses"
      ],
      objectif: "Réduire le délai client à moins de 90 jours"
    },
    {
      priorite: 3,
      categorie: "IMPORTANT - Réduction de l'endettement",
      actions: [
        "Renégociation des conditions de dette",
        "Restructuration de la dette court terme vers long terme",
        "Utilisation de la trésorerie excédentaire pour rembourser"
      ],
      objectif: "Ramener le ratio dette/capitaux propres sous 3"
    },
    {
      priorite: 4,
      categorie: "Amélioration de la rentabilité",
      actions: [
        "Analyse détaillée des coûts (achats = 53% du CA)",
        "Renégociation avec les fournisseurs",
        "Optimisation des charges de personnel",
        "Augmentation des prix si possible"
      ],
      objectif: "Atteindre un résultat net positif en 2025"
    },
    {
      priorite: 5,
      categorie: "Optimisation du BFR",
      actions: [
        "Réduction des stocks (rotation déjà bonne à 34 jours)",
        "Accélération du recouvrement clients",
        "Négociation de délais fournisseurs plus longs"
      ],
      objectif: "Réduire le BFR à 30 jours de CA"
    }
  ],

  scenariosPrevision: {
    optimiste: {
      hypotheses: "CA +30%, Recouvrement clients amélioré, Renforcement capitaux",
      ca2025: 324415277,
      resultatNet2025: 5000000,
      impact: "Retour à la rentabilité"
    },
    realiste: {
      hypotheses: "CA +15%, Amélioration progressive",
      ca2025: 286982745,
      resultatNet2025: -3000000,
      impact: "Réduction continue de la perte"
    },
    pessimiste: {
      hypotheses: "Stagnation CA, Pas d'amélioration structure",
      ca2025: 249550213,
      resultatNet2025: -10000000,
      impact: "Aggravation, risque de cessation de paiement"
    }
  }
};

// Score de santé financière global (sur 100)
export const scoreGlobal = {
  2024: {
    liquidite: 75, // Bon
    solvabilite: 15, // Très faible
    rentabilite: 30, // Faible (négatif mais en amélioration)
    efficacite: 40, // Moyen
    global: Math.round((75 + 15 + 30 + 40) / 4), // 40/100
    appreciation: "RISQUÉ - Nécessite des actions urgentes"
  },
  2023: {
    liquidite: 65,
    solvabilite: 20,
    rentabilite: 10,
    efficacite: 25,
    global: 30,
    appreciation: "TRÈS RISQUÉ"
  }
};