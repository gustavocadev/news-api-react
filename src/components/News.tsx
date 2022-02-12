type NewsProps = {
    article: any;
};

const News = ({ article }: NewsProps) => {
    const { urlToImage, url, title, description, source } = article;
    return (
        <>
            {urlToImage && (
                <figure>
                    <img
                        src={urlToImage}
                        alt={article.title}
                        className="rounded"
                    />
                    <figcaption className="flex flex-col gap-2">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-xl"
                        >
                            {title}
                        </a>

                        <p>{description}</p>
                        <a
                            href={url}
                            target="_blank"
                            className="bg-purple-600 rounded py-2 px-4 w-full text-lg text-center hover:bg-purple-700"
                        >
                            Ver Noticia Completa
                        </a>
                    </figcaption>
                </figure>
            )}
        </>
    );
};

export default News;
