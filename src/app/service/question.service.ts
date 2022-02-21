import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IQuestion } from '../models/IQuestion';

@Injectable()
export class QuestionService {

    /**
     * Базовый URL для API
     */
    private apiUrl: string;

    /**
     * Конструктор
     * @param http Клиент для работы с http
     */
    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl + 'question/search';
    }

    /**
     * Получить вопросы по названию
     * @param intitle Название вопроса
     */
    public get(intitle: string) {
        return this.http.get<IQuestion[]>(this.apiUrl, {
            params: { intitle: intitle }
        });
    }
}