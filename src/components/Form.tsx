import { Dispatch, SetStateAction } from "react";

type FormProps = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    setCategory: Dispatch<SetStateAction<string>>;
};

const Form = ({ handleSubmit, setCategory }: FormProps) => {
    return (
        <section className="flex items-center justify-center flex-col px-4 sm:px-[140px] lg:px-[340px] gap-4 mt-4">
            <h1 className="text-3xl text-semibold text-center">
                Encuentra noticias por categoria
            </h1>
            <form
                className="w-full gap-4 flex flex-col"
                onSubmit={handleSubmit}
            >
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="text-black text-xl text-center border-b-2 border-gray-800 p-2 w-full focus:outline-none rounded "
                >
                    <option value="business">General</option>
                    <option value="science">Ciencia</option>
                    <option value="sports">Deportes</option>
                    <option value="business">Negocios</option>
                    <option value="entertainment">Entretenimiento</option>
                    <option value="health">Salud</option>
                    <option value="technology">Tecnologia</option>
                </select>
                <button
                    type="submit"
                    className="py-2 px-4 bg-yellow-400 rounded  text-black text-xl block w-full"
                >
                    Buscar
                </button>
            </form>
        </section>
    );
};

export default Form;
