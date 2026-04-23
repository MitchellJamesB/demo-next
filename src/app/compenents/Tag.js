export default function({content = 'New', classNames = ''}) {
  return (
   <div
      className={'px-2 b-gradient-to-r from-cyan-500 to-red-500 text-white rounded-full text-mono ${classNames}'}
  >
    {content}
  </div>
  )
}
