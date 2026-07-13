import BlogCard from "./BlogCard";
import blogData from "./BlogData";


function Blog(){
    return(
        <section className="bg-slate-50 py-24" id="blog" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">

                    <span className="text-blue-600 uppercase racking-[0.25em] font-semibold text-sm">
                            Blog
                    </span>

                    <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
                            Conteúdos que ajudam sua empresa
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
                        Confira artigos, novidades e conteúdos preparados por nossa equipe para manter sua empresa sempre atualizada.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((post)=>(
                            <BlogCard 
                            key={post.id}
                            image={post.image}
                            category={post.category}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                            
                            
                            />
                        ))}
                </div>

            </div>

        </section>
    );
}

export default Blog;