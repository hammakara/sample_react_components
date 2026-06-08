import React from 'react'

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 7
  const closeHour = 20
  const isOpen = (hour >= openHour) && (hour <= closeHour)
  console.log(isOpen)

  return (
    <div className="footer">
      {isOpen ? (
        <div>
          <p>ទំលាក់លេខ ទំលាក់ទីតាំង</p>
          <button>ទិញ</button>
        </div>
      ) :
        (
          <div>
            <p>ហាងយើងខ្ញំុ​ដំណើរការនៅចន្លោះម៉ោង {openHour}:00 ដល់ម៉ោង { closeHour}:00</p>
          </div>
        )
      }
    </div>
  )
}

export default Footer
