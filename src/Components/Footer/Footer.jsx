import { Home } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="mb-6 sm:mb-0">
            <a href="https://yourwebsite.com/" class="flex items-center">
              {/* <img src={LogoDev} class="h-8 mr-3" alt="Logo" /> */}
              <Home/>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Facebook</span>
            </a>
          </div>
          <div class="flex space-x-6">
            <a href="https://facebook.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0H1.326C.593 0 0 .592 0 1.326v21.348C0 23.407.593 24 1.326 24h11.494V14.708h-3.12v-3.62h3.12V8.413c0-3.066 1.87-4.742 4.6-4.742 1.312 0 2.438.098 2.762.142v3.2l-1.894.001c-1.488 0-1.777.708-1.777 1.746v2.288h3.555l-.464 3.62h-3.09V24h6.065C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a href="https://twitter.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557a9.825 9.825 0 0 1-2.825.775 4.948 4.948 0 0 0 2.163-2.724 9.866 9.866 0 0 1-3.127 1.195 4.933 4.933 0 0 0-8.398 4.49A14.01 14.01 0 0 1 1.67 3.149a4.934 4.934 0 0 0 1.527 6.573 4.913 4.913 0 0 1-2.23-.616c-.054 2.28 1.582 4.415 3.946 4.89a4.92 4.92 0 0 1-2.224.085 4.935 4.935 0 0 0 4.604 3.417 9.874 9.874 0 0 1-6.1 2.105c-.396 0-.79-.023-1.174-.068A13.978 13.978 0 0 0 7.548 21c9.142 0 14.307-7.721 14.307-14.416 0-.219-.005-.438-.015-.655A10.243 10.243 0 0 0 24 4.557z" />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
            <a href="https://instagram.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.964.24 2.415.413a4.902 4.902 0 0 1 1.789 1.053 4.902 4.902 0 0 1 1.053 1.789c.173.451.359 1.245.413 2.415.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.964-.413 2.415a4.902 4.902 0 0 1-1.053 1.789 4.902 4.902 0 0 1-1.789 1.053c-.451.173-1.245.359-2.415.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.964-.24-2.415-.413a4.902 4.902 0 0 1-1.789-1.053 4.902 4.902 0 0 1-1.053-1.789c-.173-.451-.359-1.245-.413-2.415-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.964.413-2.415a4.902 4.902 0 0 1 1.053-1.789 4.902 4.902 0 0 1 1.789-1.053c.451-.173 1.245-.359 2.415-.413 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.34.013 7.052.073 5.683.134 4.608.323 3.738.588 2.861.856 2.118 1.241 1.424 1.936.731 2.63.347 3.374.078 4.262.011 5.045 0 5.646 0 12s.012 6.955.078 7.738c.269.888.653 1.632 1.346 2.326.693.694 1.437 1.077 2.325 1.346.783.066 1.384.078 7.738.078s6.955-.012 7.738-.078c.888-.269 1.632-.653 2.326-1.346.694-.693 1.077-1.437 1.346-2.325.066-.783.078-1.384.078-7.738s-.012-6.955-.078-7.738c-.269-.888-.653-1.632-1.346-2.326-.694-.693-1.437-1.077-2.325-1.346-.783-.066-1.384-.078-7.738-.078z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.999 3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 0 0-2.882 1.44 1.44 0 0 0 0 2.882z" />
              </svg>
              <span class="sr-only">Instagram page</span>
            </a>
            <a href="https://linkedin.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3a2.1 2.1 0 1 0 0 4.201A2.1 2.1 0 0 0 4.98 3zm.037 16.293h-4V8.32h4v10.973zm7.618-10.973h-3.777v1.502h.053c.523-.992 1.8-1.501 3.054-1.501 3.1 0 3.676 2.031 3.676 4.672v5.3h-4v-4.706c0-1.125-.023-2.576-1.569-2.576-1.57 0-1.81 1.229-1.81 2.497v4.785h-4V8.32h3.822v1.34h-.054c.527-.998 1.8-1.54 3.056-1.54 2.927 0 3.676 1.93 3.676 4.444v5.279h-.002z" />
              </svg>
              <span class="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Minstagram™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
