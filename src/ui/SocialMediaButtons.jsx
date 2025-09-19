import React from 'react'

function SocialMediaButtons(props) {
  return (
    <button class="flex flex-row w-32 gap-2 bg-gray-600 p-2 rounded-md text-gray-200">
        {props.children}
         </button>
  )
}

export default SocialMediaButtons