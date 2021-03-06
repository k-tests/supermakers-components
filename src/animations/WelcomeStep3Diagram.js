import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

/*
Step 1 - duplicate file
Step 2 - change file name and function name to a new name
Step 3 - replace svg with copied code from the svg file
Step 4 - remove width and height from svg element
Step 5 - add animations. Add motion. in front of any path that needs
animating and make sure you have initial, animate, and transition attributes.
More info on animating here: https://www.framer.com/api/motion/
Step 6 - Import this file into the level that you want to use it in.
Step 7 - if you ever want to tweak the animation, come back and change this file.
*/

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  svg: {
    display: "block",
    position: "absolute",
    maxHeight: "100%",
  },
});

export default function WelcomeStep3Diagram(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.484 413.523" preserveAspectRatio="xMidYMin" >
        <g id="Group_1610" data-name="Group 1610" transform="translate(-73.933 -339.164)">
          <g id="Group_1604" data-name="Group 1604" transform="translate(74.433 361.628)">
            <g id="Group_1603" data-name="Group 1603">
              <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1, delay: 1 }} id="windmill_line" data-name="Path 504" d="M149.886,528.918c.157-5.738,1.339-11.65,4.73-16.284s9.344-7.688,14.943-6.417a7.537,7.537,0,0,1,4.029,2.177,10.971,10.971,0,0,1,2.066,5.129,12.247,12.247,0,0,1,.392,4.641,9.865,9.865,0,0,1-1.685,3.723,25.873,25.873,0,0,1-22.672,11.167,43.229,43.229,0,0,1,13.669,2.334c3.663,1.256,7.268,3.1,9.686,6.124,2.458,3.077,3.445,7.054,4.165,10.928a3.527,3.527,0,0,1,0,1.9c-.415,1.076-1.7,1.475-2.827,1.734a23.268,23.268,0,0,1-7.666.889c-3.31-.355-6.3-2.093-9.082-3.915-2.844-1.861-5.666-3.915-7.558-6.74-2.082-3.1-2.9-6.937-5.09-9.971,1.223,5.464-1.854,11.091-5.97,14.89a11.845,11.845,0,0,1-4.245,2.734,10.967,10.967,0,0,1-4.719.282c-4.554-.564-9.253-3.058-10.77-7.388a2.792,2.792,0,0,1-.2-1.4c.17-.951,1.112-1.55,2.006-1.916a23.494,23.494,0,0,1,5.038-1.234l15.77-2.647c1.3-.218,2.847-.652,3.186-1.924a2.729,2.729,0,0,0-.279-1.814c-1.01-2.173-3.186-3.565-5.383-4.526s-4.545-1.632-6.545-2.952c-2.374-1.568-4.083-3.937-5.737-6.252-1.566-2.192-3.214-4.73-2.691-7.372a6.587,6.587,0,0,1,3.008-4.062,17.423,17.423,0,0,1,4.795-1.941,7.31,7.31,0,0,1,3.67-.367,6,6,0,0,1,3.37,2.773c3.991,6.127,2.835,14.692,7.226,20.54" transform="translate(-87.371 -315.329)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1, delay: 1 }} id="wave" data-name="Path 505" d="M294.189,522.054c13.583,0,13.583,19.69,27.167,19.69s13.584-19.69,27.168-19.69,13.584,19.69,27.169,19.69,13.583-19.69,27.168-19.69" transform="translate(-94.145 -315.96)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
              <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1 }} id="origami" data-name="Group 1420" transform="translate(434.505 270.924)">
                <path id="Path_272" data-name="Path 272" d="M636.278,618.189H538.2L587.24,598.4Z" transform="translate(-538.197 -589.871)" fill="#ffafa6" />
                <g id="Group_819" data-name="Group 819">
                  <path id="Path_271" data-name="Path 271" d="M538.2,617.838l49.041-28.314,49.042,28.315-49.041-15.984Z" transform="translate(-538.197 -589.524)" fill="#fff" />
                  <path id="Path_284" data-name="Path 284" d="M636.281,618.994H538.2" transform="translate(-538.197 -590.677)" fill="none" stroke="#182a74" strokeWidth={1} strokeDasharray={20} />
                </g>
              </motion.g>
              <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1 }} id="button" data-name="Group 1421" transform="translate(101.418 230.613)">
                <circle id="Ellipse_78" data-name="Ellipse 78" cx="45.155" cy="45.155" r="45.155" transform="translate(22.219)" fill="#182a74" />
                <path id="Rectangle_156" data-name="Rectangle 156" d="M223.111,600.069H261.7A28.65,28.65,0,0,1,290.35,628.72h0A28.649,28.649,0,0,1,261.7,657.369h-38.59a28.65,28.65,0,0,1-28.649-28.649h0A28.651,28.651,0,0,1,223.111,600.069Z" transform="translate(-194.462 -583.697)" fill="#fff" />
                <circle id="Ellipse_48" data-name="Ellipse 48" cx="28.783" cy="28.783" r="28.783" transform="translate(0 16.372)" fill="#ff6d00" />
                <g id="Test" transform="translate(9.357 34.943)" style={{isolation: 'isolate'}}>
                  <text id="Test-2" data-name="Test" transform="translate(0 14)" fill="#fff" fontSize={15} fontFamily="Helvetica" letterSpacing="0.04em" style={{isolation: 'isolate'}}><tspan x={0} y={0}>Test</tspan></text>
                </g>
              </motion.g>
              <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1 }} id="light_appear" data-name="Group 1423" transform="translate(243.674 341.325)">
                <g id="Group_931" data-name="Group 931" transform="translate(12.204 6.031)">
                  <g id="Group_930" data-name="Group 930">
                    <path id="Rectangle_213" data-name="Rectangle 213" d="M362.735,678.78v-5.62a4.091,4.091,0,0,1,4.091-4.091h0a4.091,4.091,0,0,1,4.09,4.091h0v5.62h-8.182Z" transform="translate(-352.704 -669.068)" />
                    <motion.path initial={{fill: "#fff"}} animate={{fill: "#aaa"}} transition={{delay: 5, yoyo: Infinity }} id="light_bulb" data-name="Path 318" d="M370.508,679.177c0,3.212.163,5.349,3.644,8.057,3.588,2.8,6.386,6.469,6.386,11.812a14.121,14.121,0,1,1-28.242,0c0-5.343,2.8-9.018,6.386-11.812,3.478-2.707,3.644-4.845,3.644-8.057Z" transform="translate(-352.296 -669.464)" fill="#fff" />
                    <line id="Line_125" data-name="Line 125" y2="13.639" transform="translate(12.274 9.711)" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth="3.091" />
                    <line id="Line_126" data-name="Line 126" y2="13.639" transform="translate(15.464 9.711)" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth="3.091" />
                  </g>
                </g>
                <path id="Path_319" data-name="Path 319" d="M392.246,696.639H339.6l8.612-23.255a16.23,16.23,0,0,1,15.22-10.593h4.987a16.231,16.231,0,0,1,15.22,10.593Z" transform="translate(-339.595 -662.791)" fill="#182a74" />
              </motion.g>
              <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1 }} id="battery" data-name="Group 1603" transform="translate(381.756 158.398)">
                <circle id="Ellipse_48-2" data-name="Ellipse 48-2" cx="23.764" cy="23.764" r="23.764" transform="translate(0 0)" fill="#fff" />
                <path id="Rectangle_126" data-name="Rectangle 126" d="M610.955,519.945h-103.7V472.416h103.7a23.764,23.764,0,0,1,23.764,23.764h0A23.764,23.764,0,0,1,610.955,519.945Z" transform="translate(-484.237 -472.416)" />
                <circle id="Ellipse_49" data-name="Ellipse 49" cx="23.764" cy="23.764" r="23.764" transform="translate(103.7 0)" fill="#fff" />
                <circle id="Ellipse_50" data-name="Ellipse 50" cx="14.202" cy="14.202" r="14.202" transform="translate(113.262 9.724)" />
                <g id="battery_rectangles" data-name="Group 465" transform="translate(40.635 15.688)">
                  <motion.rect initial={{opacity: 0}} animate={{opacity: [0, 1, 1, 1, 1, 1]}} transition={{delay: 4, loop: Infinity}} id="Rectangle_128" data-name="Rectangle 128" width="6.248" height="16.477" fill="#ffafa6" />
                  <motion.rect initial={{opacity: 0}} animate={{opacity: [0, 0, 1, 1, 1, 1]}} transition={{delay: 4, loop: Infinity}} id="Rectangle_127" data-name="Rectangle 127" width="6.248" height="16.477" transform="translate(10.74)" fill="#ffafa6" />
                  <motion.rect initial={{opacity: 0}} animate={{opacity: [0, 0, 0, 1, 1, 1]}} transition={{delay: 4, loop: Infinity}} id="Rectangle_129" data-name="Rectangle 129" width="6.248" height="16.477" transform="translate(21.479)" fill="#ffafa6" />
                  <motion.rect initial={{opacity: 0}} animate={{opacity: [0, 0, 0, 0, 1, 1]}} transition={{delay: 4, loop: Infinity}} id="Rectangle_130" data-name="Rectangle 130" width="6.248" height="16.477" transform="translate(32.219)" fill="#ffafa6" />
                  <motion.rect initial={{opacity: 0}} animate={{opacity: [0, 0, 0, 0, 0, 1]}} transition={{delay: 4, loop: Infinity}} id="Rectangle_131" data-name="Rectangle 131" width="6.248" height="16.477" transform="translate(42.958)" fill="#ffafa6" />
                </g>
                <g id="Group_466" data-name="Group 466" transform="translate(6.784 18.269)">
                  <rect id="Rectangle_138" data-name="Rectangle 138" width="11.279" height="2.597" transform="translate(0 4.342)" />
                  <rect id="Rectangle_133" data-name="Rectangle 133" width="11.279" height="1.831" transform="translate(115.021 4.724)" fill="#fff" />
                  <rect id="Rectangle_139" data-name="Rectangle 139" width="2.597" height="11.279" transform="translate(4.342)" />
                </g>
              </motion.g>
              <motion.path initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1 }} id="lightning" data-name="Path 515" d="M468.134,397.3l-6.117,10.574h5.65l-8.712,17.62,1.4-14.577h-4.345l2.665-13.617Z" transform="translate(-100.476 -311.079)" fill="#182a74" />
              <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1 }} id="windmill_house" data-name="Group 1425" transform="translate(237.258)">
                <g id="Group_1417" data-name="Group 1417">
                  <path id="Path_328" data-name="Path 328" d="M367.043,343.955v75.963" transform="translate(-334.253 -308.991)" fill="none" stroke="#000" strokeWidth={1} />
                  <g id="windmill_wings" data-name="Group 938">
                    <motion.g initial={{rotate: 0}} animate={{rotate: -360}} transition={{delay: 3, yoyo: Infinity}} id="windmill_wings_rotate">
                      <g id="Group_936" data-name="Group 936" transform="translate(0.005 0)">
                        <path id="Rectangle_214" data-name="Rectangle 214" d="M397.513,309.8h0a7.626,7.626,0,0,1,0,10.784l-19.666,19.666a7.627,7.627,0,0,1-10.785,0h0a7.627,7.627,0,0,1,0-10.785L386.728,309.8A7.625,7.625,0,0,1,397.513,309.8Z" transform="translate(-334.171 -307.568)" fill="#ffafa6" />
                        <path id="Rectangle_215" data-name="Rectangle 215" d="M365.6,341.711h0a7.624,7.624,0,0,1,0,10.783l-19.662,19.663a7.624,7.624,0,0,1-10.783,0h0a7.624,7.624,0,0,1,0-10.783l19.662-19.663A7.624,7.624,0,0,1,365.6,341.711Z" transform="translate(-332.923 -308.816)" fill="#ffafa6" />
                      </g>
                      <g id="Group_937" data-name="Group 937">
                        <path id="Rectangle_216" data-name="Rectangle 216" d="M335.151,309.8h0a7.627,7.627,0,0,1,10.785,0L365.6,329.467a7.627,7.627,0,0,1,0,10.785h0a7.627,7.627,0,0,1-10.785,0l-19.666-19.666A7.627,7.627,0,0,1,335.151,309.8Z" transform="translate(-332.918 -307.568)" fill="#ffafa6" />
                        <path id="Rectangle_217" data-name="Rectangle 217" d="M367.062,341.713h0a7.625,7.625,0,0,1,10.785,0l19.665,19.665a7.625,7.625,0,0,1,0,10.785h0a7.625,7.625,0,0,1-10.784,0L367.062,352.5A7.626,7.626,0,0,1,367.062,341.713Z" transform="translate(-334.166 -308.816)" fill="#ffafa6" />
                      </g>
                    </motion.g>
                  </g>
                <motion.g initial={{rotate: 0}} animate={{rotate: -360}} transition={{delay: 3, yoyo: Infinity}} id="windmill_top_spin">
                  <g id="winmill_top" data-name="Group 943" transform="translate(16.632 17.459)">
                    <g id="Group_939" data-name="Group 939" transform="translate(0 0)">
                      <circle id="Ellipse_90" data-name="Ellipse 90" cx="16.158" cy="16.158" r="16.158" fill="#fff" />
                    </g>
                    <g id="Group_940" data-name="Group 940" transform="translate(8.084 8.08)">
                      <path id="Path_321" data-name="Path 321" d="M366.713,342.225v-8.078h0a8.078,8.078,0,0,0-8.073,8.078h8.073Z" transform="translate(-358.64 -334.147)" />
                      <path id="Path_322" data-name="Path 322" d="M375.122,342.554h-8.079v8.079a8.079,8.079,0,0,0,8.079-8.079Z" transform="translate(-358.969 -334.476)" />
                    </g>
                    <g id="Group_941" data-name="Group 941">
                      <path id="Path_323" data-name="Path 323" d="M367.043,325.738V341.9H383.2a16.157,16.157,0,0,0-16.156-16.158Z" transform="translate(-350.885 -325.738)" />
                      <path id="Path_324" data-name="Path 324" d="M350.227,342.554a16.158,16.158,0,0,0,16.158,16.158V342.554Z" transform="translate(-350.227 -326.396)" />
                    </g>
                    <g id="Group_942" data-name="Group 942" transform="translate(8.08 8.085)">
                      <path id="Path_325" data-name="Path 325" d="M367.043,342.225h8.079a8.078,8.078,0,0,0-8.079-8.073h0Z" transform="translate(-358.965 -334.152)" fill="#fff" />
                      <path id="Path_326" data-name="Path 326" d="M366.714,350.633v-8.079h-8.078a8.078,8.078,0,0,0,8.078,8.079Z" transform="translate(-358.636 -334.481)" fill="#fff" />
                    </g>
                  </g>
                </motion.g>
                </g>
                <g id="house" data-name="Group 1418" transform="translate(12.677 105.077)">
                  <path id="Path_327" data-name="Path 327" d="M387.813,460.368h-41.7V438.376a7.228,7.228,0,0,1,2.116-5.11l14.652-14.651a5.774,5.774,0,0,1,8.165,0L385.7,433.266a7.227,7.227,0,0,1,2.121,5.11Z" transform="translate(-346.111 -416.924)" fill="#04bf8a" />
                  <rect id="Rectangle_218" data-name="Rectangle 218" width="13.973" height="13.973" transform="translate(22.867 22.649)" fill="#fff" />
                  <rect id="Rectangle_219" data-name="Rectangle 219" width="13.973" height="13.973" transform="translate(4.473 22.649)" fill="#fff" />
                  <circle id="Ellipse_91" data-name="Ellipse 91" cx="3.227" cy="3.227" r="3.227" transform="translate(17.624 9.241)" fill="#fff" />
                </g>
              </motion.g>
              <motion.path initial={{strokeDasharray: "0 200"}} animate={{strokeDasharray: "12 12"}} transition={{duration: 1, delay: 2 }} id="led_line" data-name="Path 537" d="M574.923,385.346H544.528a15.688,15.688,0,0,0-15.688,15.687v58.1" transform="translate(-103.326 -310.611)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} strokeDasharray={12} />
              <line id="Line_255" data-name="Line 255" y2="53.671" transform="translate(436.254 225.784)" fill="#96d5ef" />
              <motion.path initial={{strokeDasharray: "0 200"}} animate={{strokeDasharray: "12 12"}} transition={{duration: 1, delay: 2 }} id="line_origami" data-name="Path 538" d="M584.025,637.133v25.891a15.687,15.687,0,0,1-15.687,15.687H407.285" transform="translate(-98.57 -320.462)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} strokeDasharray={12} />
              <motion.path initial={{strokeDasharray: "0 200"}} animate={{strokeDasharray: "12 12"}} transition={{duration: 1, delay: 2 }} id="line_led" data-name="Path 539" d="M314.057,685.353H253.528a15.687,15.687,0,0,1-15.687-15.687v-6.875" transform="translate(-91.94 -321.466)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} strokeDasharray={12} />
              <motion.path initial={{strokeDasharray: "0 200"}} animate={{strokeDasharray: "12 12"}} transition={{duration: 1, delay: 2 }} id="line_wave" data-name="Line 256" d="M71.136 0, L0 0" transform="translate(102.7 205.927)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} strokeDasharray={12} />
              <motion.path initial={{strokeDasharray: "0 200"}} animate={{strokeDasharray: "12 12"}} transition={{duration: 1, delay: 2 }} id="line_cable" data-name="Path 540" d="M110.443,528.139h-8.756A15.687,15.687,0,0,1,86,512.452V436.189A15.687,15.687,0,0,1,101.686,420.5h23.635" transform="translate(-85.999 -311.986)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} strokeDasharray={12} />
              <motion.path initial={{strokeDasharray: "0 200"}} animate={{strokeDasharray: "12 12"}} transition={{duration: 1, delay: 2 }} id="line_house" data-name="Path 541" d="M448.933,488.1h-62a15.687,15.687,0,0,1-15.687-15.687h0" transform="translate(-97.16 -314.018)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} strokeDasharray={12} />
              <g id="Group_1602" data-name="Group 1602" transform="translate(333.613 225.784)">
                <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="Path_542" data-name="Path 542" d="M451.2,617.53a9.933,9.933,0,0,1,9.933,9.933,12.414,12.414,0,0,1-12.415,12.414A15.519,15.519,0,0,1,433.2,624.358a19.4,19.4,0,0,1,19.4-19.4h51.7" transform="translate(-433.197 -544.988)" fill="none" stroke="#182a74" strokeLinecap="round" strokeWidth={1} />
                <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="Path_543" data-name="Path 543" d="M451.2,604.493a9.932,9.932,0,0,1,9.933,9.932,12.415,12.415,0,0,1-12.415,12.414A15.519,15.519,0,0,1,433.2,611.321a19.4,19.4,0,0,1,19.4-19.4h51.7" transform="translate(-433.197 -544.478)" fill="none" stroke="#182a74" strokeLinecap="round" strokeWidth={1} />
                <g id="Group_1601" data-name="Group 1601">
                  <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1, delay: 1 }} id="Path_544" data-name="Path 544" d="M451.2,564.893a9.932,9.932,0,0,0,9.933-9.932,12.415,12.415,0,0,0-12.415-12.415A15.519,15.519,0,0,0,433.2,558.064a19.4,19.4,0,0,0,19.4,19.4h51.7" transform="translate(-433.197 -542.546)" fill="none" stroke="#182a74" strokeLinecap="round" strokeWidth={1} />
                  <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1, delay: 1 }} id="Path_545" data-name="Path 545" d="M451.2,577.93A9.931,9.931,0,0,0,461.132,568a12.416,12.416,0,0,0-12.415-12.415A15.519,15.519,0,0,0,433.2,571.1a19.4,19.4,0,0,0,19.4,19.4h51.7" transform="translate(-433.197 -543.056)" fill="none" stroke="#182a74" strokeLinecap="round" strokeWidth={1} />
                </g>
              </g>
            </g>
          </g>
          <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1 }} id="Led" data-name="Group 1606" transform="translate(562.678 339.664)">
            <g id="Group_1428" data-name="Group 1428" transform="translate(0 0)">
              <g id="Group_1255" data-name="Group 1255" transform="translate(0 0)">
                <g id="Group_1252" data-name="Group 1252">
                  <g id="Group_684" data-name="Group 684">
                    <g id="Group_685" data-name="Group 685">
                      <g id="Group_675" data-name="Group 675">
                        <g id="Group_676" data-name="Group 676">
                          <path id="Rectangle_187" data-name="Rectangle 187" d="M426.2,155.108h0a18.958,18.958,0,0,1,18.954,18.959v40.692h-37.91V174.065a18.957,18.957,0,0,1,18.955-18.958h0Z" transform="translate(-407.239 -155.106)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                          <path id="Path_235" data-name="Path 235" d="M427.1,283.31v49.353" transform="translate(-415.771 -210.177)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                          <path id="Path_236" data-name="Path 236" d="M450.944,283.312v49.352" transform="translate(-426.013 -210.178)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                          <rect id="Rectangle_188" data-name="Rectangle 188" width="37.913" height="13.478" transform="translate(0 59.654)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id="Group_1427" data-name="Group 1427" transform="translate(9.874 17.623)">
                <path id="Path_457" data-name="Path 457" d="M447.548,187.044a3.565,3.565,0,0,1,5.043,0" transform="translate(-434.428 -185.999)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                <path id="Path_458" data-name="Path 458" d="M424.548,187.044a3.565,3.565,0,0,1,5.043,0" transform="translate(-424.548 -185.999)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                <path id="Path_459" data-name="Path 459" d="M451.968,202.548" transform="translate(-436.327 -193.108)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                <ellipse id="Ellipse_115" data-name="Ellipse 115" cx="2.122" cy="2.845" rx="2.122" ry="2.845" transform="translate(13.519 18.718)" fill="#182a74" />
                <ellipse id="Ellipse_115-2" data-name="Ellipse 115" cx="2.122" cy="2.845" rx="2.122" ry="2.845" transform="translate(0.399 18.718)" fill="#182a74" />
              </g>
            </g>
          </motion.g>
          <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1 }} id="pencil" data-name="Group 1607" transform="translate(97.838 654.087)">
            <g id="Group_479" data-name="Group 479" transform="translate(0)">
              <path id="Path_186" data-name="Path 186" d="M-118.34,645.633l-11.9-24.521,23.939,12.2,44.493,45.581a8.855,8.855,0,0,1,0,12.312l-.006.006a8.372,8.372,0,0,1-12.037,0Z" transform="translate(130.241 -621.112)" fill="none" stroke="#182a74" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
            </g>
            <path id="Path_243" data-name="Path 243" d="M10.834,0,0,10.835" transform="translate(12.144 12.498)" fill="none" stroke="#182a74" strokeLinecap="round" strokeWidth={1} />
            <path id="Path_187" data-name="Path 187" d="M-126.293,629.059l3.993-3.994-7.94-3.953Z" transform="translate(130.241 -621.112)" fill="#182a74" stroke="#182a74" strokeWidth={1} />
          </motion.g>
          <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1 }} id="Group_1604-2" data-name="Group 1604" transform="translate(135.057 454.896)">
            <g id="Group_1497" data-name="Group 1497" transform="translate(14.591 0.029)">
              <g id="Group_1492" data-name="Group 1492" transform="translate(110.54 34.2)">
                <path id="Path_510" data-name="Path 510" d="M340.307,448.657h-38.26a1.623,1.623,0,0,1,0-3.246h38.261a1.623,1.623,0,1,1,.068,3.246h-.07Z" transform="translate(-300.458 -445.411)" fill="#ffdc20" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
              </g>
              <path id="Path_516" data-name="Path 516" d="M282.79,426.435H265.464c-19.356,0-28.617-4.774-39.338-10.3-10.864-5.6-23.181-11.952-43.742-11.952a15.192,15.192,0,0,0,0,30.384c13.192,0,20.166,3.6,29.82,8.573,11.822,6.1,26.533,13.682,53.262,13.682h0a15.192,15.192,0,0,0,15.193-15.192h17.327a15.193,15.193,0,0,0-15.193-15.193Z" transform="translate(-167.192 -404.18)" fill="#ffdc20" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
            </g>
            <path id="Path_517" data-name="Path 517" d="M185.69,422.459c37.432,0,42.741,22.285,98.119,22.285" transform="translate(-155.756 -407.268)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} strokeDasharray={12} />
            <g id="Group_1510" data-name="Group 1510">
              <g id="Group_1494" data-name="Group 1494" transform="translate(14.742)">
                <circle id="Ellipse_134" data-name="Ellipse 134" cx="15.192" cy="15.192" r="15.192" fill="#ffdc20" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
                <ellipse id="Ellipse_115-3" data-name="Ellipse 115" cx="1.662" cy="2.228" rx="1.662" ry="2.228" transform="translate(9.073 4.261)" fill="#182a74" />
                <ellipse id="Ellipse_115-2-2" data-name="Ellipse 115-2" cx="1.662" cy="2.228" rx="1.662" ry="2.228" transform="translate(17.833 4.113)" fill="#182a74" />
                <path id="Path_460" data-name="Path 460" d="M187.6,432.125a4.712,4.712,0,0,1-6.663,0h0" transform="translate(-169.687 -408.916)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              </g>
              <path id="Path_513" data-name="Path 513" d="M183.586,417.108a4.439,4.439,0,1,1-4.439,4.439h0A4.439,4.439,0,0,1,183.586,417.108Z" transform="translate(-154.64 -406.355)" fill="#ffdc20" stroke="#182a74" strokeWidth={1} />
              <g id="Group_1495" data-name="Group 1495" transform="translate(0 13.568)">
                <path id="Path_512" data-name="Path 512" d="M177.928,423.749H151.191a1.624,1.624,0,0,1,0-3.247h26.736a1.624,1.624,0,1,1,.068,3.247h-.067Z" transform="translate(-149.602 -420.502)" fill="#ffdc20" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
              </g>
            </g>
          </motion.g>
        </g>
      </svg>

    </div>
  );
}
