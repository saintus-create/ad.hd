export interface LdxStudy {
  _id: string;
  author: string;
  country: string;
  doi: string;
  journal: string;
  source: string;
  subject: string;
  summary: string;
  year: number;
  dosingRegimen?: string;
}

export const ldxStudies: LdxStudy[] = [
  {
    _id: "ldx-255", author: "Ermer JC, et al.", country: "USA",
    doi: "10.1211/jcp", journal: "J Clin Pharmacol", source: "us_ldx_studies",
    subject: "PK of LDX in Adults",
    summary: "Steady-state d-amp reached by Day 5; 95% eliminated in 48h.",
    year: 2010, dosingRegimen: "20–70 mg QD",
  },
  {
    _id: "ldx-256", author: "Boellner SW, et al.", country: "USA",
    doi: "10.1089/cap", journal: "J Child Adol Psych", source: "us_ldx_studies",
    subject: "LDX Efficacy in Pediatrics",
    summary: "First pediatric study proving conversion of LDX to d-amp.",
    year: 2010, dosingRegimen: "30–70 mg QD",
  },
  {
    _id: "ldx-257", author: "Najib J.", country: "USA",
    doi: "10.1016/clinthera", journal: "Clin Ther", source: "us_ldx_studies",
    subject: "Efficacy of Stimulants",
    summary: "Confirmed superiority over placebo in pediatric efficacy.",
    year: 2017, dosingRegimen: "Titrated to effect",
  },
  {
    _id: "ldx-258", author: "Cortese S, et al.", country: "UK",
    doi: "10.1056/NEJMoa", journal: "N Engl J Med", source: "us_ldx_studies",
    subject: "Cardiovascular Safety",
    summary: "Confirmed no clinical cardiac risk (PR, QRS, QTc) vs placebo.",
    year: 2012, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-259", author: "Biederman J, et al.", country: "USA",
    doi: "10.1177/1087", journal: "J Atten Disord", source: "us_ldx_studies",
    subject: "ADHD Treatment Outcomes",
    summary: "Improved QoL and occupational function; low abuse potential.",
    year: 2015, dosingRegimen: "Flexible dosing",
  },
  {
    _id: "ldx-260", author: "Findling RL, et al.", country: "USA",
    doi: "10.1176/appi", journal: "Am J Psychiatry", source: "us_ldx_studies",
    subject: "Long-term Stimulant Use",
    summary: "Long-term safety/tolerability confirmed for up to 1 year.",
    year: 2011, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-261", author: "Coghill D, et al.", country: "USA",
    doi: "10.2165/115", journal: "CNS Drugs", source: "us_ldx_studies",
    subject: "Multicenter Outcomes",
    summary: "High effect size across European pediatric populations.",
    year: 2014, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-262", author: "Steer C, et al.", country: "USA",
    doi: "10.1007/s402", journal: "Eur Child Adol Psy", source: "us_ldx_studies",
    subject: "Real-World Switch Study",
    summary: "Significant improvement in ADHD-RS-IV scores in real-world settings.",
    year: 2012, dosingRegimen: "Individualized",
  },
  {
    _id: "ldx-263", author: "Dittmann RW, et al.", country: "Germany",
    doi: "10.1016/j.jaac", journal: "JAACAP", source: "us_ldx_studies",
    subject: "Multicenter RCT",
    summary: "LDX showed greater symptomatic improvement than OROS-MPH.",
    year: 2013, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-264", author: "Adler LA, et al.", country: "USA",
    doi: "10.1177/1087", journal: "J Atten Disord", source: "us_ldx_studies",
    subject: "Adult ADHD Review",
    summary: "Confirmed scale sensitivity for measuring LDX treatment response.",
    year: 2008, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-265", author: "Mattingly G, et al.", country: "USA",
    doi: "10.1097/JCP", journal: "J Clin Psychopharm", source: "us_ldx_studies",
    subject: "Executive Function",
    summary: "Significant improvement in BRIEF-A scores (self-regulation).",
    year: 2013, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-266", author: "Faraone SV, et al.", country: "USA",
    doi: "10.1016/j.biopsych", journal: "Biol Psychiatry", source: "us_ldx_studies",
    subject: "Mechanism of Action",
    summary: "Preliminary data suggesting genotype-independent metabolism.",
    year: 2014, dosingRegimen: "20–70 mg",
  },
  {
    _id: "ldx-267", author: "CADDRA", country: "Canada",
    doi: "N/A (Guideline)", journal: "Practice Guidelines", source: "us_ldx_studies",
    subject: "Canadian ADHD Standards",
    summary: "LDX reinforced as first-line due to consistent delivery.",
    year: 2024, dosingRegimen: "Titrated",
  },
  {
    _id: "ldx-268", author: "Weisler R, et al.", country: "USA",
    doi: "10.1089/cap", journal: "J Child Adol Psych", source: "us_ldx_studies",
    subject: "Transition Care",
    summary: "Extended efficacy profile to adolescent demographic safely.",
    year: 2009, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-269", author: "Wigal SB, et al.", country: "USA",
    doi: "10.1016/j.clinthera", journal: "Clin Ther", source: "us_ldx_studies",
    subject: "Dosing & Adherence",
    summary: "Onset of action within 1.5h; duration up to 13h.",
    year: 2010, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-270", author: "Goodman DW, et al.", country: "USA",
    doi: "10.1097/JCP", journal: "J Clin Psychopharm", source: "us_ldx_studies",
    subject: "Comorbidity Reduction",
    summary: "Safe use established in adults without severe hypertension.",
    year: 2010, dosingRegimen: "Flexible",
  },
  {
    _id: "ldx-271", author: "Ichikawa H, et al.", country: "Japan",
    doi: "10.1007/s402", journal: "CNS Drugs", source: "us_ldx_studies",
    subject: "Multicenter Study",
    summary: "Confirmed consistency of PK profile in East Asian populations.",
    year: 2020, dosingRegimen: "20–70 mg",
  },
  {
    _id: "ldx-272", author: "Kollins S, et al.", country: "USA",
    doi: "10.1177/1087", journal: "J Atten Disord", source: "us_ldx_studies",
    subject: "Diversion Rates",
    summary: 'Oral LDX shows significantly lower "Liking" scores than d-amp.',
    year: 2011, dosingRegimen: "50–150 mg",
  },
  {
    _id: "ldx-273", author: "Volkow ND, et al.", country: "USA",
    doi: "10.1016/j.neuro", journal: "Neuropharmacology", source: "us_ldx_studies",
    subject: "Dopamine Dysfunction",
    summary: 'Slow conversion rate limits the "rush" associated with abuse.',
    year: 2009, dosingRegimen: "Therapeutic",
  },
  {
    _id: "ldx-274", author: "McCarthy S, et al.", country: "UK",
    doi: "10.1136/bmj", journal: "BMJ", source: "us_ldx_studies",
    subject: "Cardiovascular Safety",
    summary: "No increased risk of stroke or MI in non-cardiac adults.",
    year: 2015, dosingRegimen: "Variable",
  },
  {
    _id: "ldx-275", author: "Pliszka SR, et al.", country: "USA",
    doi: "10.1016/j.jaac", journal: "JAACAP", source: "us_ldx_studies",
    subject: "Comorbidity Reduction",
    summary: "LDX did not exacerbate pre-existing motor/vocal tics.",
    year: 2017, dosingRegimen: "Low dose",
  },
  {
    _id: "ldx-276", author: "Brown TE.", country: "USA",
    doi: "10.1007/s11920", journal: "Curr Psychiatry Rep", source: "us_ldx_studies",
    subject: "Cognitive Improvements",
    summary: "Improvements in working memory and cognitive flexibility.",
    year: 2013, dosingRegimen: "Titrated",
  },
  {
    _id: "ldx-277", author: "Spencer T, et al.", country: "USA",
    doi: "10.1177/1087", journal: "J Atten Disord", source: "us_ldx_studies",
    subject: "Adult ADHD Framework",
    summary: "Primary adult trial establishing initial FDA approval efficacy.",
    year: 2008, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-278", author: "McGough J, et al.", country: "USA",
    doi: "10.1016/j.clinthera", journal: "Clin Ther", source: "us_ldx_studies",
    subject: "Dosing Refinement",
    summary: "Confirmed 70 mg as highest safe dose for children.",
    year: 2013, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-279", author: "Huss M, et al.", country: "Germany",
    doi: "10.1007/s007", journal: "Eur J Pediatr", source: "us_ldx_studies",
    subject: "Psychosocial Gains",
    summary: "Noted significant gains in family life and school performance.",
    year: 2014, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-280", author: "DuPaul GJ, et al.", country: "USA",
    doi: "10.1177/1087", journal: "J Atten Disord", source: "us_ldx_studies",
    subject: "Academic Outcomes",
    summary: "Improvements in GPA and academic task completion.",
    year: 2012, dosingRegimen: "Flexible",
  },
  {
    _id: "ldx-281", author: "Krishnan S, et al.", country: "USA",
    doi: "10.1097/JCP", journal: "J Clin Psychopharm", source: "us_ldx_studies",
    subject: "Long-term Outcomes",
    summary: "No significant difference in sleep latency vs placebo after 4 weeks.",
    year: 2008, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-282", author: "Newcorn J, et al.", country: "USA",
    doi: "10.1111/j.1600", journal: "Acta Psychiatr Scand", source: "us_ldx_studies",
    subject: "Individualized Titration",
    summary: "Severity of baseline symptoms did not limit LDX effectiveness.",
    year: 2013, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-283", author: "Rohde LA, et al.", country: "Brazil",
    doi: "10.1016/j.psych", journal: "Psychiatry Res", source: "us_ldx_studies",
    subject: "[Vyvanse] South American Efficacy Trial",
    summary: "Validated the global consistency of LDX treatment effects.",
    year: 2021, dosingRegimen: "30–70 mg",
  },
  {
    _id: "ldx-284", author: "Wilens TE, et al.", country: "USA",
    doi: "10.1176/appi", journal: "Am J Psychiatry", source: "us_ldx_studies",
    subject: "Long-term Stimulant Use",
    summary: "ADHD treatment with stimulants reduced overall SUD relapse risk.",
    year: 2016, dosingRegimen: "Supervised",
  },
];
