"use client"
// import * as React from "react"

// import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"




// export function NoticeCard({id,cardTitle,cardDescription,noticePreview,discription}:{id:string,cardTitle:string,cardDescription:string,noticePreview:string,discription: React.ReactNode}) {
//   return (
//       <AccordionItem id={id} value={id} className="border-0">
//         <Card className="overflow-hidden">
//           <CardHeader className="pb-0">
//             <CardTitle>{cardTitle}</CardTitle>
//             <CardDescription>{cardDescription}</CardDescription>
//           </CardHeader>

//           <CardContent className="pb-4">
//             <div className="space-y-2">
//               <p>{noticePreview}</p>

//               {/* Wrap Button in a div when using asChild */}
//                 <div onClick={() => {
//                   if(window.location.hash.substring(1) !== id){
//                     window.location.hash = id;
//                     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//                   }else{
//                   }
//                 }}>
//                     <AccordionTrigger >
//                         Read More
//                     </AccordionTrigger>
//                 </div>
//               </div>


//             <AccordionContent className="pt-4 px-0">
//               {discription}
//             </AccordionContent>

//           </CardContent>
//         </Card>
//       </AccordionItem>
//   )
// }


import { useEffect } from "react"
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

type NoticeCardProps = {
  id: string
  cardTitle: string
  cardDescription: string
  noticePreview: string
  isOpen:boolean
  description: string
}

export default function NoticeCard({ id, cardTitle, cardDescription, noticePreview, isOpen, description }: NoticeCardProps) {
  // Automatically scroll into view if the current hash matches this card's ID
  useEffect(() => {
    if (isOpen && window.location.hash.substring(1) === id) {
      const el = document.getElementById(id)
      if (el) {
        const headerOffset = 80
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition = window.scrollY + elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }, [isOpen, id])


  return (
    <AccordionItem id={id} value={id} className="border-0">
      <Card className="overflow-hidden">
        <CardHeader className="pb-0">
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>

        <CardContent className="pb-4">
          <div className="space-y-2">
            <p>{noticePreview}</p>

            {/* Use asChild with a button for accessibility */}
            <div onClick={() => {
              if(window.location.hash.substring(1) !== id){
                window.location.hash = id;
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }else{
              }
            }}>
              <AccordionTrigger>
                <button
                  onClick={() => {
                    if (window.location.hash.substring(1) !== id) {
                      window.location.hash = id
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" ,block: "start"})
                    }
                  }}
                  // className="text-left w-full font-medium text-blue-600 hover:underline"
                >
                  Read More
                </button>
              </AccordionTrigger>
            </div>
          </div>

          <AccordionContent>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </AccordionContent>
        </CardContent>
      </Card>
    </AccordionItem>
  )
}
