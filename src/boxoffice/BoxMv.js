import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import qs from 'query-string';
import MvInfo from "./MvInfo";

export default function BoxMv(){
  const loc = useLocation().search;
  const mvcd = qs.parse(loc).mvcd;
  console.log(mvcd);

//////// 일반 함수 //////////////

// url 변환
const getMovie = async (mvcd) => {
  let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
  url = url + 'key=f5eef3421c602c6cb7ea224104795888';
  url = url + '&movieCd=' + mvcd;

  const resp = await fetch(url);
  const data = await resp.json();
  console.log('dt',data);
  setMovieInfo(data);
}

//// State 함수 //////////////////////////////////////////////
const [mv,setMv] = useState();
const [movieInfo,setMovieInfo] = useState();


//// useEffect ////////////////////////////////////////////// 
useEffect(()=>{
  getMovie(mvcd)
},[])
useEffect(()=>{
  console.log(movieInfo)
},[movieInfo])


//////ccccccc////////////// cccc //////////////////////////////////
// const [mv,setMv] = useState([]);
// const dRef = useRef();

// const mvLoad = (d) => {
//     const url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='+d;
// // let p = fetch(url);

// // ↓이렇게 쓸 수 있도록 문법이 만들어 졌음.
// fetch(url)
//   .then((response) => response.json())
//   // .then((response) => {return resp.json()})  ↑↑ 이렇게 해도 됨.
//   //이거 자체가 비동기 통신 : 결과가 promise로 나옴
//   // data가 object 타입.
//   .then((data)=>{
//     console.log('data' ,data)
//     setMv(data.boxOfficeResult.dailyBoxOfficeList);
//   })
//   .catch((error) => {console.log('error'+ error)})
// }
// ////////////////////////////////////////////////////////////////////////////////////////////
// useEffect(()=>{
//   const today = new Date();
//   const yesterday = new Date(today);
//   console.log(yesterday.getDate()-1);
//   console.log(yesterday.getDate());
  
//   mvLoad('20221025')
// },[])


// const handleChange = (e) =>{
//   e.preventDefault();
//   let dd = dRef.current.value.replaceAll('-','');
//   mvLoad(dd);
//   console.log(dd)
//   console.log(dRef.current.value);
// }
///////////////////////////////////////////////////////////////////////////////////////////

  // const mvInfo = mv;
  // console.log('mv',mv);
  
  // const key1 = ['movieCd', 'openDt', 'prdtStatNm', 'showTm',] 
  // const key2 = ['audits', 'nations', 'directors', 'genres', 'companys']  
  
  // const koKey = {
  //   'movieCd' : '영화코드',
  //   'openDt' : '개봉일',
  //   'prdtStatNm' : '제작상태',
  //   'showTm' : '상영시간',
  //   'audits' : '관람등급',
  //   'nations' : '제작국가',
  //   'directors' : '감독',
  //   'genres' : '장르',
  //   'companys' : '배급사',
  // }

  // let myInfo = {};
  
  // for(let k of key1){
  //   myInfo[koKey[k]] = mvInfo[k]
  // }

  // for(let k of key2){
  //   switch(k) {
  //     case 'audits' :
  //       myInfo[koKey[k]] = mvInfo[k].map((item) => item.watchGradeNm);
  //       break;
  //     case 'nations' :
  //       myInfo[koKey[k]] = mvInfo[k].map((item) => item.nationNm);
  //       break;
  //     case 'directors' :
  //       myInfo[koKey[k]] = mvInfo[k].map((item) => item.peopleNm);
  //       break;
  //     case 'genres' :
  //       myInfo[koKey[k]] = mvInfo[k].map((item) => item.genreNm);
  //       break;
  //     case 'companys' :
  //       myInfo[koKey[k]] = mvInfo[k].filter((item) => item.companyPartNm === '배급사')
  //       myInfo[koKey[k]] = myInfo[koKey[k]].map((item) => item.companyNm);
  //       break;
  //     }
  // }
  
  // let list = []
  // for(let [k,v] of Object.entries(myInfo)){
  //   list.push(
  //     <div className='list' key={k + myInfo.movieNm}>
  //       <div className='key'>{k}</div>
  //       <div className='content'>{v}</div>
  //     </div>
  //   ) 
  // }
  // // useState Hook
  // let [count1, upCount1] = useState(0);
  // let [count2, downCount2] = useState(0);
  
  // // useEffect Hook : 랜더링시 매번 발생
  // useEffect(() => {
  //   console.log('useEffect 랜더링 발생시 계속 실행')
  // })
  // // useEffect Hook : 컴포넌트 생성시 실행
  // useEffect(() => {
  //   console.log('useEffect 컴포넌트 생성시 실행')
  // },[])
  // // useEffect Hook : 관련 state 변수가 변경될때 실행
  // useEffect(() => {
  //   console.log('useEffect up 실행시 실행')
  // },[count1])
  // // useState, useEffect는 컴포넌트마다 별개로 실행

  // // timer
  // let [timer, setTimer] = useState(false);
  // let [timer2, setTimer2] = useState('none');

  // const handleTimer = () => {
  //   setTimer2(timer2 === 'none' ? 'block' : 'none');
  //   console.log(timer2)
  // }
///ccccc///////////ccccc//////////////////////////////////////////


  return (
    <>
      <h1>영화정보</h1>
      {/* <span>{list}</span> */}
      <ul>

      </ul>
    </>
  );
}