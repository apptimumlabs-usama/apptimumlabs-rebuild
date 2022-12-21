import React, { useContext }  from 'react'
import Link from 'next/link';
import HeaderContext from '../../context/HeaderContext';

const Logo = ({ isMobile, scrolledVersion }) => {
  const contextColor = useContext(HeaderContext);

  return (
    <>
       <Link href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="165.382"
          height="81.642"
          viewBox="0 0 165.382 81.642"
          className="w-32"
        >
          <g
            id="Group_439"
            data-name="Group 439"
            transform="translate(-139.381 -57.179)"
          >
            <g
              id="Group_186"
              data-name="Group 186"
              transform="translate(-44.45 -35.821)"
            >
              <path
                id="Path_55"
                data-name="Path 55"
                d="M95.842,415.668c4.839,0,9.676-.024,14.514.01a6.023,6.023,0,0,1,5.958,4.852,8.621,8.621,0,0,1,.128,1.8c.011,3.408-.257,6.844.078,10.22.348,3.509.3,6.987.319,10.481,0,.984-.375,1.97-.377,2.956q-.038,22.184-.011,44.369a6.765,6.765,0,0,1-2.414,5.609,5.673,5.673,0,0,1-3.642,1.323q-14.6.02-29.194,0c-3.415-.01-5.939-2.8-6-6.539-.027-1.566,0-3.134,0-4.7,0-12.729.06-25.458-.063-38.185-.019-2.032-.272-4.089-.255-6.14,0-.454.248-.9.265-1.362a7.756,7.756,0,0,0-.172-1.4c0-.045-.1-.081-.1-.123a34.434,34.434,0,0,1,.086-5.742,7.7,7.7,0,0,0,.136-3.087,8.2,8.2,0,0,1-.231-2.448c.092-2.241.207-4.488.464-6.715a5.937,5.937,0,0,1,5.834-5.166c4.892-.029,9.786,0,14.672,0Zm19.247,40.6V421.873a4.829,4.829,0,0,0-4.77-4.963c-1.043-.036-2.089,0-3.134-.011a1.226,1.226,0,0,0-1.327,1.082,2.237,2.237,0,0,1-2.571,2q-7.382.009-14.763,0a2.274,2.274,0,0,1-2.62-2.056,1.171,1.171,0,0,0-1.276-1.027c-.935,0-1.87-.01-2.8,0a4.87,4.87,0,0,0-5.127,5.124q-.017,34.185,0,68.37a4.925,4.925,0,0,0,5.3,5.229q13.9.01,27.792,0a4.936,4.936,0,0,0,5.3-5.3Q115.091,473.294,115.089,456.264ZM76.116,421.928h-.057v68.751h.057Zm39.69,40.814h.031V421.626h-.031Zm.045,16.338h-.045v12.078h.037Z"
                transform="translate(109.658 -322.659)"
                className={`${isMobile || scrolledVersion
                    ? "fill-[#f9903f]"
                    : contextColor && contextColor.logo
                      ? contextColor.logo
                      : "fill-[#f9903f]"
                  }`}
              ></path>
              <rect
                id="Rectangle_9"
                data-name="Rectangle 9"
                width="41.26"
                height="79.486"
                rx="4"
                transform="translate(184.851 94.09)"
                fill="none"
                className={`${isMobile || scrolledVersion
                    ? "stroke-[#f9903f]"
                    : contextColor && contextColor.stroke
                      ? contextColor.stroke
                      : "stroke-[#f9903f]"
                  }`}
                strokeMiterlimit="10"
                strokeWidth="2.04"
              ></rect>
              <path
                id="Path_56"
                data-name="Path 56"
                d="M76.477,492.236a7.766,7.766,0,0,1-.428-.736V488.07l.02-64.105.141-1.205.269-.09.11,1.356-.059,4.137v3.11l-.04,9.64.1,10.861v22.38Z"
                transform="translate(109.468 -323.722)"
                className={`${isMobile || scrolledVersion
                    ? "fill-[#f9903f]"
                    : contextColor && contextColor.logo
                      ? contextColor.logo
                      : "fill-[#f9903f]"
                  }`}
              ></path>
              <g
                id="Layer_3"
                data-name="Layer 3"
                transform="translate(188.912 119.109)"
              >
                <path
                  id="Path_57"
                  data-name="Path 57"
                  d="M100.16,446.435H92.921l-12.87,35.19h6.737l2.871-8.143,1.754-5.027,5.077-14.635,5.123,14.635,1.754,5.027,2.815,8.143h6.837Z"
                  transform="translate(-80.051 -446.435)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-[#f9903f]"
                      : contextColor && contextColor.logo
                        ? contextColor.logo
                        : "fill-[#f9903f]"
                    }`}
                ></path>
              </g>
              <g
                id="Layer_4"
                data-name="Layer 4"
                transform="translate(201.063 142.079)"
              >
                <path
                  id="Path_59"
                  data-name="Path 59"
                  d="M98.708,482.308h-.957a.238.238,0,0,1-.265-.208.206.206,0,0,1,0-.056v-.652a.083.083,0,0,0-.05-.084q-.517-.3-1.032-.6a.078.078,0,0,0-.092,0c-.185.109-.372.215-.557.319a.237.237,0,0,1-.334-.036.221.221,0,0,1-.037-.066l-.957-1.657a.235.235,0,0,1,.041-.331.271.271,0,0,1,.056-.033c.186-.107.372-.215.558-.319a.084.084,0,0,0,.048-.086v-1.189a.083.083,0,0,0-.049-.084c-.188-.107-.377-.215-.563-.319a.233.233,0,0,1-.126-.3.241.241,0,0,1,.03-.052l.957-1.668a.236.236,0,0,1,.307-.132.287.287,0,0,1,.057.032c.188.109.376.215.562.319a.078.078,0,0,0,.092,0q.515-.3,1.032-.6a.082.082,0,0,0,.048-.084v-.659a.234.234,0,0,1,.212-.254.231.231,0,0,1,.042,0h1.949a.235.235,0,0,1,.254.214.172.172,0,0,1,0,.042v.665a.077.077,0,0,0,.043.076c.348.2.7.4,1.044.6a.092.092,0,0,0,.079,0c.194-.108.387-.221.58-.333a.23.23,0,0,1,.32.055.192.192,0,0,1,.021.036q.491.846.98,1.695a.229.229,0,0,1-.059.317.282.282,0,0,1-.035.02c-.189.106-.378.215-.569.328a.088.088,0,0,0-.054.089V478.5a.083.083,0,0,0,.05.084l.569.329a.231.231,0,0,1,.115.305.193.193,0,0,1-.023.041l-.966,1.682a.235.235,0,0,1-.308.123.228.228,0,0,1-.048-.027l-.568-.328a.077.077,0,0,0-.092,0q-.515.3-1.032.6a.082.082,0,0,0-.048.084v.659a.233.233,0,0,1-.211.255.237.237,0,0,1-.042,0Zm-3.785-5.7.545.319a.235.235,0,0,1,.126.214v1.546a.234.234,0,0,1-.118.212l-.159.092-.393.228.766,1.327c.182-.105.357-.2.531-.306a.247.247,0,0,1,.276,0l1.33.769a.23.23,0,0,1,.121.21v.638h1.531v-.618a.235.235,0,0,1,.126-.221c.44-.255.881-.507,1.319-.764a.264.264,0,0,1,.294,0c.151.091.3.177.457.265l.064.034.764-1.326-.544-.319a.227.227,0,0,1-.126-.207v-1.558a.224.224,0,0,1,.111-.2c.056-.036.114-.067.171-.1l.388-.225-.765-1.327c-.182.105-.357.2-.531.306a.252.252,0,0,1-.277,0c-.441-.259-.887-.514-1.329-.77a.227.227,0,0,1-.12-.21v-.625H97.947v.612a.244.244,0,0,1-.131.231c-.435.252-.873.5-1.308.758a.265.265,0,0,1-.3,0c-.152-.091-.3-.177-.458-.265l-.064-.033Z"
                  transform="translate(-94.375 -473.511)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-[#f9903f]"
                      : contextColor && contextColor.logo
                        ? contextColor.logo
                        : "fill-[#f9903f]"
                    }`}
                ></path>
                <path
                  id="Path_60"
                  data-name="Path 60"
                  d="M99.112,476.22a2.1,2.1,0,1,1-2.1,2.1,2.1,2.1,0,0,1,2.1-2.1Zm0,3.741a1.638,1.638,0,1,0-1.638-1.637v.03a1.642,1.642,0,0,0,1.634,1.608Z"
                  transform="translate(-94.774 -473.922)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-[#f9903f]"
                      : contextColor && contextColor.logo
                        ? contextColor.logo
                        : "fill-[#f9903f]"
                    }`}
                ></path>
              </g>
            </g>
            <g
              id="Group_187"
              data-name="Group 187"
              transform="translate(-6100 -103)"
            >
              <g
                id="Layer_1-2"
                data-name="Layer 1-2"
                transform="translate(6286.756 196.382)"
              >
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M142.857,470.733a6.433,6.433,0,0,1-6.6,6.822,5.145,5.145,0,0,1-3.99-1.6v6.18h-3.843V464.1h3.67v1.528a5.15,5.15,0,0,1,4.168-1.725A6.44,6.44,0,0,1,142.857,470.733Zm-3.892,0a3.387,3.387,0,1,0-3.375,3.67,3.345,3.345,0,0,0,3.375-3.67Z"
                  transform="translate(-128.423 -457.973)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M165.249,470.733a6.432,6.432,0,0,1-6.6,6.822,5.145,5.145,0,0,1-3.99-1.6v6.18h-3.843V464.1h3.671v1.528a5.149,5.149,0,0,1,4.168-1.725A6.44,6.44,0,0,1,165.249,470.733Zm-3.892,0a3.386,3.386,0,1,0-3.374,3.67,3.345,3.345,0,0,0,3.374-3.67Z"
                  transform="translate(-133.697 -457.973)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
                <path
                  id="Path_43"
                  data-name="Path 43"
                  d="M181.269,475.877a5.492,5.492,0,0,1-3.129.838c-3.129,0-4.951-1.6-4.951-4.754v-5.444h-2.044v-2.955h2.044v-3.228h3.843v3.226h3.305v2.957h-3.305v5.393a1.546,1.546,0,0,0,1.65,1.749,2.585,2.585,0,0,0,1.552-.493Z"
                  transform="translate(-138.486 -457.132)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
                <path
                  id="Path_44"
                  data-name="Path 44"
                  d="M186.774,458.288a2.2,2.2,0,0,1,2.388-2.143,2.157,2.157,0,0,1,2.389,2.069,2.4,2.4,0,0,1-4.777.073Zm.467,3.987h3.843v13.253h-3.843Z"
                  transform="translate(-142.168 -456.145)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
                <path
                  id="Path_45"
                  data-name="Path 45"
                  d="M219.638,469.772v7.586h-3.843v-7c0-2.143-.96-3.129-2.512-3.129-1.725,0-2.932,1.108-2.932,3.474v6.649h-3.843v-6.994c0-2.143-.911-3.129-2.513-3.129-1.7,0-2.906,1.108-2.906,3.474v6.649h-3.843V464.1h3.67v1.528a5.373,5.373,0,0,1,4.168-1.725,4.96,4.96,0,0,1,4.36,2.167,5.958,5.958,0,0,1,4.779-2.167C217.368,463.91,219.638,465.732,219.638,469.772Z"
                  transform="translate(-144.634 -457.973)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
                <path
                  id="Path_46"
                  data-name="Path 46"
                  d="M244.532,464.163v13.253h-3.646v-1.581a5.36,5.36,0,0,1-4.114,1.773c-3.325,0-5.665-1.868-5.665-5.962v-7.483h3.843v6.921c0,2.218.986,3.2,2.685,3.2,1.774,0,3.054-1.133,3.054-3.572v-6.552Z"
                  transform="translate(-152.61 -458.034)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
                <path
                  id="Path_47"
                  data-name="Path 47"
                  d="M275.891,469.772v7.586h-3.844v-7c0-2.143-.959-3.129-2.512-3.129-1.725,0-2.93,1.108-2.93,3.474v6.649h-3.843v-6.994c0-2.143-.911-3.129-2.512-3.129-1.7,0-2.906,1.108-2.906,3.474v6.649H253.5V464.1h3.675v1.528a5.371,5.371,0,0,1,4.167-1.725,4.954,4.954,0,0,1,4.359,2.167,5.958,5.958,0,0,1,4.779-2.167C273.624,463.91,275.891,465.732,275.891,469.772Z"
                  transform="translate(-157.885 -457.973)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
              </g>
              <g
                id="Layer_5"
                data-name="Layer 5"
                transform="translate(6379.563 187.41)"
              >
                <path
                  id="Path_48"
                  data-name="Path 48"
                  d="M249.826,445.021h.828v7.11h4.382v.719h-5.21Z"
                  transform="translate(-249.826 -444.553)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
                <path
                  id="Path_49"
                  data-name="Path 49"
                  d="M262.617,449.787v3.645h-.76v-.917a2.207,2.207,0,0,1-2.023.973c-1.331,0-2.147-.693-2.147-1.71,0-.905.575-1.666,2.27-1.666h1.868v-.365c0-1.006-.575-1.554-1.666-1.554a3,3,0,0,0-1.956.693l-.358-.592a3.735,3.735,0,0,1,2.393-.794A2.1,2.1,0,0,1,262.617,449.787Zm-.793,1.878V450.7h-1.852c-1.14,0-1.509.446-1.509,1.05,0,.683.548,1.106,1.488,1.106a1.883,1.883,0,0,0,1.867-1.2Z"
                  transform="translate(-251.677 -445.137)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
                <path
                  id="Path_50"
                  data-name="Path 50"
                  d="M272.982,449.763a2.854,2.854,0,0,1-2.929,3,2.558,2.558,0,0,1-2.269-1.219V452.7h-.761v-8.3h.794v3.533a2.563,2.563,0,0,1,2.236-1.163A2.844,2.844,0,0,1,272.982,449.763Zm-.793,0A2.194,2.194,0,1,0,270,452.056a2.159,2.159,0,0,0,2.192-2.293Z"
                  transform="translate(-253.877 -444.409)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
                <path
                  id="Path_51"
                  data-name="Path 51"
                  d="M275.945,452.768l.358-.627a3.551,3.551,0,0,0,2.091.66c1.118,0,1.581-.38,1.581-.962,0-1.532-3.813-.325-3.813-2.65,0-.961.828-1.677,2.325-1.677a4.011,4.011,0,0,1,2.08.548l-.346.637a3.012,3.012,0,0,0-1.734-.5c-1.062,0-1.532.414-1.532.972,0,1.581,3.813.391,3.813,2.65,0,1.017-.894,1.677-2.426,1.677A4.015,4.015,0,0,1,275.945,452.768Z"
                  transform="translate(-255.978 -445.14)"
                  className={`${isMobile || scrolledVersion
                      ? "fill-white"
                      : contextColor
                        ? contextColor.logo ?? contextColor.text
                        : "fill-black"
                    }`}
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </Link>
    </>
  )
}

export default Logo
