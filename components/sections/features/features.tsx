import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { gl_rowOneFeatures as gl_features1} from "@/constants/"
import { gl_rowTwoFeatures as gl_features2} from "@/constants/"
import { pl_rowThreeFeatures as pl_features1} from "@/constants/"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadset, faUserCheck, faAward, faSliders, faPieChart, faLightbulb, faPaperPlane, faHouse, faShield, faBatteryFull, faComments, faStar, faBolt } from "@fortawesome/free-solid-svg-icons"
import { pl_rowFourFeatures as pl_features2} from "@/constants/"
import { sc_rowFiveFeatures as sc_features1} from "@/constants/"
import { sc_rowSixFeatures as sc_features2} from "@/constants/"
import { but_rowEightFeatures as but_features2} from "@/constants/"

// Map string icon names to actual FontAwesome icons
const iconMap = {
  "Headset": faHeadset,
  "UserCheck": faUserCheck,
  "Award": faAward,
  "Sliders": faSliders,
  "PieChart": faPieChart,
  "Bulb": faLightbulb,
  "PaperPlane": faPaperPlane,
  "House": faHouse,
  "Shield": faShield,
  "BatteryFull": faBatteryFull,
  "Comments": faComments,
  "Star": faStar,
  "Bolt": faBolt
};

// Function to render the correct icon based on icon name
const getIcon = (iconName: string) => {
  const icon = iconMap[iconName as keyof typeof iconMap];
  return icon ? <FontAwesomeIcon icon={icon} className="w-5 h-5 text-atcat-blue"/> : null;
}

export const Features = () => {
    return (
        <div className="flex flex-col gap-4 mt-2 sm:mt-4 mb-10">
             <h1 className="text-center uppercase text-sm sm:text-lg text-atcat-blue  mt-10">
                {"Guided learning"}
            </h1>
            <div className="px-16 flex flex-col lg:flex-row gap-4 mx-auto md:w-[70vw] max-w-7xl ">
               
                {gl_features1.map((card) => (
                    <Card key={card.id} className=" min-h-[150px] flex flex-col gap-1 w-full sm:hover:shadow-[0_0_30px_rgba(17,182,242,1)] sm:hover:scale-[102%]  transition-all duration-300 bg-gradient-to-br to-20% from-gray-700 to-60% to-black/90 rounded-lg p-2 border-[1px] border-atcat-100  sm:border-gray-300/40">
                        <CardHeader className="flex flex-row items-center gap-2 mt-2 mb-2">
                        <div className="size-8 flex items-center justify-center rounded-full bg-white/100">
                              {getIcon(card.icon)}
                            </div>
                            <CardTitle className="text-md sm:text-xl ">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 -mt-2 pt-2 pb-2">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}

            </div>

            <div className="px-16 flex flex-col lg:flex-row gap-4 mx-auto md:w-[70vw] max-w-7xl ">
                
                {gl_features2.map((card) => (
                    <Card key={card.id} className="min-h-[150px] flex flex-col gap-1 w-full sm:hover:shadow-[0_0_30px_rgba(17,182,242,1)] sm:hover:scale-[102%]  transition-all duration-300 bg-gradient-to-br to-20% from-gray-700 to-60% to-black/90 rounded-lg p-2 border-[1px] border-atcat-100 sm:border-gray-300/40">
                        <CardHeader className="flex flex-row items-center gap-2 mt-2 mb-2">
                        <div className="size-8 flex items-center justify-center rounded-full bg-white/100">
                              {getIcon(card.icon)}
                            </div>
                            <CardTitle className="text-md sm:text-xl ">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 -mt-2">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}

            </div>
            
            <h1 className="text-center uppercase text-sm sm:text-lg text-atcat-blue mt-10">
                {"Play to Learn"}
            </h1>
            <div className="px-16 flex flex-col lg:flex-row gap-4 mx-auto md:w-[70vw] max-w-7xl ">
                
                {pl_features1.map((card) => (
                    <Card key={card.id} className="min-h-[150px] flex flex-col gap-1 w-full sm:hover:shadow-[0_0_30px_rgba(17,182,242,1)] sm:hover:scale-[102%]  transition-all duration-300 bg-gradient-to-br to-20% from-gray-700 to-60% to-black/90 rounded-lg p-2 border-[1px] border-atcat-100 sm:border-gray-300/40">
                        <CardHeader className="flex flex-row items-center gap-2 mt-2 mb-2">
                        <div className="size-8 flex items-center justify-center rounded-full bg-white/100">
                              {getIcon(card.icon)}
                            </div>
                            <CardTitle className="text-md sm:text-xl ">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 -mt-2 pt-2 pb-2">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}

            </div>
            
            <div className="px-16 flex flex-col lg:flex-row gap-4 mx-auto md:w-[70vw] max-w-7xl ">
                
                {pl_features2.map((card) => (
                    <Card key={card.id} className="min-h-[150px] flex flex-col gap-1 w-full hover:shadow-[0_0_30px_rgba(17,182,242,1)] hover:scale-[102%]  transition-all duration-300 bg-gradient-to-br to-20% from-gray-700 to-60% to-black/90 rounded-lg p-2 border-[1px] border-atcat-100 sm:border-gray-300/40">
                        <CardHeader className="flex flex-row items-center gap-2 mt-2 mb-2">
                        <div className="size-8 flex items-center justify-center rounded-full bg-atcat-white/100">
                              {getIcon(card.icon)}
                            </div>
                            <CardTitle className="text-md sm:text-xl ">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 -mt-2 pt-2 pb-2">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}

            </div>

            <h1 className="text-center uppercase text-sm sm:text-lg text-atcat-blue mt-10">
                {"Safe Community"}
            </h1>
            <div className="px-16 flex flex-col lg:flex-row gap-4 mx-auto md:w-[70vw] max-w-7xl ">
                
                {sc_features1.map((card) => (
                    <Card key={card.id} className="min-h-[150px] flex flex-col gap-1 w-full hover:shadow-[0_0_30px_rgba(17,182,242,1)] hover:scale-[102%]  transition-all duration-300 bg-gradient-to-br to-20% from-gray-700 to-60% to-black/90 rounded-lg p-2 border-[1px] border-atcat-100 sm:border-gray-300/40">
                        <CardHeader className="flex flex-row items-center gap-2 mt-2 mb-2">
                        <div className="size-8 flex items-center justify-center rounded-full bg-white/100">
                              {getIcon(card.icon)}
                            </div>
                            <CardTitle className="text-md sm:text-xl ">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 -mt-2 pt-2 pb-2">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}

            </div>

            <div className="px-16 flex flex-col lg:flex-row gap-4 mx-auto md:w-[70vw] max-w-7xl ">
                
                {sc_features2.map((card) => (
                    <Card key={card.id} className="min-h-[150px] flex flex-col gap-1 w-full hover:shadow-[0_0_30px_rgba(17,182,242,1)] hover:scale-[102%]  transition-all duration-300 bg-gradient-to-br to-20% from-gray-700 to-60% to-black/90 rounded-lg p-2 border-[1px] border-atcat-100 sm:border-gray-300/40">
                        <CardHeader className="flex flex-row items-center gap-2 mt-2 mb-2">
                        <div className="size-8 flex items-center justify-center rounded-full bg-white/100">
                              {getIcon(card.icon)}
                            </div>
                            <CardTitle className="text-md sm:text-xl ">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 -mt-2 pt-2 pb-2">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}

            </div>

            {/* <h1 className="flex flex-row items-center gap-2 text-center justify-center uppercase text-sm sm:text-md mt-10 mx-auto text-atcat-white font-bold mb-6">
                <span className="text-atcat-blue flex flex-row items-center"><p>{getIcon("Star")}</p><p>{getIcon("Star")}</p><p>{getIcon("Star")}</p></span>
                <span className="mx-2">but</span>
                <span className="text-atcat-blue flex flex-row items-center"><p>{getIcon("Star")}</p><p>{getIcon("Star")}</p><p>{getIcon("Star")}</p></span>
            </h1>

            <div className="px-16 flex flex-col lg:flex-row gap-4 mx-auto md:w-[70vw]">
            
                {but_features2.map((card) => (
                    <Card key={card.id} className=" flex flex-col gap-1 w-full hover:shadow-[0_0_30px_rgba(17,182,242,1)] hover:scale-[102%]  transition-all duration-300 bg-gradient-to-br to-20% from-gray-700 to-60% to-black/90 rounded-lg p-2 border-[1px] border-atcat-100 sm:border-gray-300/40">
                        <CardHeader className="flex flex-row items-center gap-2 mt-2 mb-2">
                        <div className="size-8 flex items-center justify-center rounded-full bg-white/100">
                              {getIcon(card.icon)}
                            </div>
                            <CardTitle className="text-md sm:text-xl ">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 -mt-2">{card.description}</p>
                        </CardContent>
                        <p className="uppercase text-center text-balance text-xs md:text-sm text-gray-200 mb-2 mt-4">Don't worry, we'll let you know when you're ready to join.</p>
                    </Card>
                ))}

            </div> */}

        </div>
    )
}