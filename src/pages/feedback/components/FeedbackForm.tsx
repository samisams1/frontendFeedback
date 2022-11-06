import FeedbackQuery from "./queryFeedback";

 const FeedbackForm = ()=> {
 const {CreateFeedback,title,content, setTitle,setContent } = FeedbackQuery(); 

 return (
  <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="description"
          />
        </div>

        <button onClick={CreateFeedback} className="btn btn-success">
          Submit
        </button>
      </div>
  </div>
);
};
export default FeedbackForm;
