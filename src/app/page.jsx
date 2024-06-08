import ComplaintForm from "@/components/ComplaintForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
    <main className=' px-2 md:px-6 lg:px-12 xl:px-28 md:pt-8 flex flex-col-reverse lg:flex-row gap-8 xl:gap-16 md:justify-between'>
      
      <section className="lg:w-3/5 ">
      

        <div className="my-8 px-2 md:px-0">
          <h2 className="text-3xl font-semibold">Lorem ipsum dolor sit amet.
          </h2>
          
          <p className="leading-8 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam? Corrupti error sint corporis vel ratione consectetur quisquam ea impedit repudiandae consequuntur, incidunt optio dicta distinctio explicabo fugit laudantium et quasi libero quidem accusamus suscipit. Dicta eos repellat veniam asperiores!</p>

          <ul className="md:list-disc md:pl-4 pt-4 [&>li]:my-2 [&>li]:text-lg ">
            <li>Child Trafficking</li>
            <li>Child Abuse</li>
            <li>Industry worker</li>
            <li>Sexual abuse</li>
            <li>More more</li>
            <li>More more</li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div className="my-8 px-2 md:px-0">
          <h3 className="text-2xl font-semibold">Lorem, ipsum dolor.</h3>
          <p className="mt-4 leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, magni distinctio natus doloremque nihil cum quae iusto aliquid debitis aspernatur..</p>
          <p className="mt-4 leading-8"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim non, vero reprehenderit veniam repellendus, quasi aliquid voluptatibus impedit alias assumenda!.</p>
        </div>

        <hr className="border-gray-300" />

        <div className="my-8 px-2 md:px-0">
          <h3 className="text-2xl font-semibold">Lorem, ipsum dolor.</h3>
          <p className="mt-4 leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, magni distinctio natus doloremque nihil cum quae iusto aliquid debitis aspernatur..</p>
          <p className="mt-4 leading-8"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim non, vero reprehenderit veniam repellendus, quasi aliquid voluptatibus impedit alias assumenda!.</p>
        </div>

        <hr className="border-gray-300" />

        
      </section>

      <section className="lg:w-2/5 px-2 md:px-0 pt-4 lg:pt-0">
        <ComplaintForm />
      </section>
    
   </main>

   <hr className="border-gray-300 mx-28 my-8" />

   <section className="py-8  px-2 md:px-6 lg:px-12 xl:px-28 ">
    <h2 className="text-3xl font-semibold">Lorem, ipsum.</h2>
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Feature 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cumque culpa commodi ipsa alias dolore aut aliquam, aliquid quam voluptate repudiandae sequi labore id impedit excepturi harum similique. Quis, suscipit!!</p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-blue-800 ">lorem lorem!</span>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Feature 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sit suscipit provident et accusamus excepturi dicta, ea rerum recusandae assumenda! Provident mollitia porro aperiam cupiditate? Similique enim earum consequatur perferendis..</p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-blue-800 ">lorem lorem!</span>
        </CardFooter>
      </Card>
    </article>
   </section>
   </>
  );
}
