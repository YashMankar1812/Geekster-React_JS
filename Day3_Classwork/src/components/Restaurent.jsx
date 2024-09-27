import React from 'react'

const Restaurent = () => {
  return (
    <>

      <div class="flex justify-between items-center mb-4" id='Restaurent'>
        <div class="mb-4 mt-24 mx-8">
            <input type="text" placeholder="Search restaurants..." class="border rounded p-2" value=""/>
            </div>
            <div class="mb-4 mt-24 mx-8">
                <label for="minRating" class="mr-2">Minimum Rating:</label>
                <input type="number" id="minRating" min="0" max="5" step="1" class="border rounded p-2" value="0"/>
                </div>
                </div>
        
              <div class="flex justify-center gap-1 text-xs font-medium mt-4"><ol class="flex justify-center gap-1 text-xs font-medium mt-4"><li><a href="#" class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 opacity-50 cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a></li><li><a href="#" class="block h-8 w-8 rounded border bg-blue-600 text-white text-center leading-8 cursor-pointer">1</a></li><li><a href="#" class="block h-8 w-8 rounded border bg-white text-gray-900 text-center leading-8 cursor-pointer">2</a></li><li><a href="#" class="block h-8 w-8 rounded border bg-white text-gray-900 text-center leading-8 cursor-pointer">3</a></li><li><a href="#" class="block h-8 w-8 rounded border bg-white text-gray-900 text-center leading-8 cursor-pointer">4</a></li><li><a href="#" class="block h-8 w-8 rounded border bg-white text-gray-900 text-center leading-8 cursor-pointer">5</a></li><li><a href="#" class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a></li></ol></div>
    </>
  )
}

export default Restaurent
