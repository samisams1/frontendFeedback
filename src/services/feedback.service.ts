
import axios from "axios";
import http from "../ http-common";
import feedbackData from "../types/feedback.type";

class FeedbackDataService {
  getAll() {
    return http.get<Array<feedbackData>>("/feedbacks");
  }

  get(id: string) {
    return http.get<feedbackData>(`/feedbacks/${id}`);
  }
  create(data:feedbackData) {
   return axios.post<feedbackData>('http://localhost:9090/feedbacks',data);
 };
  update(data: feedbackData, id: any) {
    return http.put<any>(`/feedbacks/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/feedbacks/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/feedbacks`);
  }

  findByTitle(title: string) {
    return http.get<Array<feedbackData>>(`/feedbacks?title=${title}`);
  }
}

export default new FeedbackDataService();

