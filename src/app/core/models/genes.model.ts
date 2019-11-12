export interface IGen {
  ID: number;
  agePhylo: string;
  ageMya: number;
  symbol: string;
  aliases: string;
  name: string;
  entrezGene: number;
  uniprot: string;
  why: string;
  band: string;
  locationStart: number;
  locationEnd: number;
  orientation: number;
  accPromoter?: any;
  accOrf: string;
  accCds: string;
  references: string;
  orthologs: string;
  commentEvolution: string;
  commentFunction: string;
  commentCause: string;
  commentAging: string;
  commentEvolutionEN: string;
  commentFunctionEN: string;
  commentAgingEN: string;
  commentsReferenceLinks: string;
  rating?: any;
  functionalClusters: string | string[];
  dateAdded: number;
  userEdited: string;
  isHidden: number;
  expression: string;
  expressionEN: string;
  expressionChange?: any;
}