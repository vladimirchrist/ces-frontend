import { UserStory } from './userStory';

export interface Requisito{
    id?: number,
    nome?: string,
    observacoes?: string,
    prioridade?: number,
    dataInicio?: number,
    dataEntrega?: number,
    idade?: number,
    recuperado?: number,
    estado?: string
    userStory?: UserStory
  }