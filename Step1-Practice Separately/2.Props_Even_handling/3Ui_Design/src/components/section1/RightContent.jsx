import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
   return (
      <div className="h-full rounded-4xl overflow-x-auto p-6 w-3/4 flex gap-10 flex-nowrap">
         {
            props.users.map(function(user,index){
               return<RightCard 
               key={index}
               img={user.img} 
               tag={user.tag}
               index={index+1}
               />
            })
         }
      </div>
   )
}

export default RightContent
