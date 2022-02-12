import { FormEvent, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import News from "./components/News";
const App = () => {
    const [category, setCategory] = useState("");
    const [categoryResp, setCategoryResp] = useState([]);

    const { VITE_API_KEY } = import.meta.env;
    const URL = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=${VITE_API_KEY}`;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch(`${URL}&category=${category}`);
        const { articles } = await response.json();
        setCategoryResp(articles);
    };
    return (
        <>
            <Header />
            <main>
                <Form handleSubmit={handleSubmit} setCategory={setCategory} />
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 sm:px-16 lg:px-32 my-4">
                    {categoryResp.map((article: any) => (
                        <News article={article} key={article.title} />
                    ))}
                </section>
            </main>
        </>
    );
};

export default App;
