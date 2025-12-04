import RightCardContent from "./RightCardContent"


const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden shrink-0 relative rounded-4xl'>
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent
      tag={props.tag}
      index={props.index}
      />
    </div>
  )
}

export default RightCard
