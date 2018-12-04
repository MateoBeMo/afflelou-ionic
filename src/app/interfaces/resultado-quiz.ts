import { Question } from '../../shared/classes/index';
import { Respuesta } from './respuesta';


export interface ResultadoQuiz {
    id: number;
    fecha: Date;
    vendedor: string;
    optometrista: string;
    entregaGafa: string;
    numeroVenta: string;
    respuestas: Respuesta[];
}

