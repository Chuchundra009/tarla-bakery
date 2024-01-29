import './Pictures.scss';


export default function Pictures({picture}) {

  return (
    <div className='kits__image'>
        <img src={`tarla-bakery/pastry-kits/${picture}.jpg`} alt={`${picture}`} className='kits__image-img'/>
    </div>
  )
}
