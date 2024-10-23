import Image from 'next/image'

export default function Home() {
  const date = '2024년 10월 1일'

  return (
    <main className="mx-auto mb-8 max-w-[720px]">
      <h1 className="mb-6 w-full text-4xl font-semibold">이력서</h1>
      <div>
        <div className="flex gap-4">
          <Image src="/image/profile.jpeg" alt="profile" width="250" height="300" priority />
          <table className="w-fit border-none	">
            <tbody>
              <tr>
                <td className="border-none p-px">이름&nbsp;&nbsp;</td>
                <td className="border-none p-px">서신악 (Iris Seo, 徐神樂)</td>
              </tr>
              <tr>
                <td className="border-none p-px">생일</td>
                <td className="border-none p-px">1998년 2월 10일 (여)</td>
              </tr>
              <tr>
                <td className="border-none p-px">학위</td>
                <td className="border-none p-px">
                  <a href="/pdf/2021-02-15 중앙대학교 학위증.pdf" target="_blank">
                    중앙대학교 컴퓨터공학부 학사
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">거주</td>
                <td className="border-none p-px">
                  <a href="https://naver.me/Fcg2bYyc" target="_blank" rel="noreferrer">
                    서울특별시 강동구 천호동
                  </a>{' '}
                  (현재)
                </td>
              </tr>
              <tr>
                <td className="border-none p-px"></td>
                <td className="border-none p-px">
                  <a href="https://maps.app.goo.gl/cYKsLY1Daz5dv95R9" target="_blank" rel="noreferrer">
                    중화인민공화국 랴오닝성 다롄시 간징쯔구 송장루
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px"></td>
                <td className="border-none p-px">(中华人民共和国辽宁省大连市甘井子区松江路)</td>
              </tr>

              <tr>
                <td className="border-none p-px">전화</td>
                <td className="border-none p-px">
                  <a href="tel:131-9015-0873">+86 131-9015-0873</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px"></td>
                <td className="border-none p-px">
                  <a href="tel:131-9015-0873">+82 010-5674-2837</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">메일</td>
                <td className="border-none p-px">
                  <a href="mailto:ririxu_@naver.com">ririxu_@naver.com</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px"></td>
                <td className="border-none p-px">
                  <a href="mailto:2193426364@qq.com">2193426364@qq.com</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">
                  <Image src="/image/instagram.svg" alt="velog" width="16" height="16" />
                </td>
                <td className="border-none p-px">
                  <a href="https://www.instagram.com/ririxu_/" target="_blank" rel="noreferrer">
                    instagram.com/ririxu_
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="my-4 ">
        고객의 불편함을 해결하는 제품을 판매하면서 고객의 목소리에 귀 기울여 비즈니스 문제를 해결하고, 제품을 판매하는
        도중 얻은 지식을 다른 사람과 공유하면서 영업의 존재 이유를 고민하는 <b>영업사원</b> 서신악입니다.
      </p>
      <h2 className="my-8 break-before-page text-3xl">
        영업 경력 <span className="text-base">(2년 10개월)</span>
      </h2>
      <ul>
        <li>
          <div className="my-4 grid grid-cols-2 gap-4">
            <a
              href="https://chingu-mobile-kr.imweb.me/"
              className="flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)친구통신</b>
              <Image src="/image/친구통신.png" alt="친구통신" width="73" height="25" />
            </a>
            <div>2021년 11월 7일 ~ 2022년 11월 6일 (12개월)</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: 점장</div>
            <div>부서: 친구통신 중앙대점</div>
          </div>
          <div>직위: 정규직</div>
          <div>역할:</div>
          <ul>
            <li>1. 고객과의 원활한 커뮤니케이션을 통해 매출 성장을 주도함</li>
            <li>2. 다양한 매체(위챗, 우편, 문자, 전화 등)를 활용해 회사 상품을 전략적으로 판매함</li>
            <li>3. 고객에게 신속한 애프터서비스 제공 및 상담 지원</li>
            <li>4. 전반적인 매장 운영 및 관리 능력</li>
            <li>5. 대리점 신입 사원의 체계적인 교육을 담당함</li>
          </ul>
        </li>
        <div className="my-6 w-full border" />
        <li>
          <div className="my-4 grid grid-cols-2 gap-4">
            <a href="https://www.innisfree.com/" className="flex items-center gap-2" target="_blank" rel="noreferrer">
              <b>(주)이니스프리</b>
              <Image src="/image/Innisfree-logo.svg" alt="이니스프리" width="90" height="40" />
            </a>
            <div>2021년 1월 1일 ~ 10월 31일 (10개월)</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: 점원</div>
            <div>부서: 이니스프리 건대그린점</div>
          </div>
          <div>직위: 정규직</div>
          <div>역할:</div>
          <ul>
            <li>1. 고객의 개인적인 스타일과 필요에 맞추어 제품을 자세히 소개하여 매출 증가에 기여함</li>
            <li>2. 대규모 중국 단체 관광객의 방문 시 다른 직원과 협력하여 원활한 접대와 서비스 제공을 위해 협업함</li>
            <li>
              3. 제품의 주요 성분 및 효능에 대한 이해를 바탕으로 고객의 의문을 해결해주며, 제품 선택에 필요한 정보를
              전달함
            </li>
            <li>
              4. 근무기간 동안 다양한 국적의 관광객을 대상으로 한국어, 중국어, 영어를 활용한 통역 서비스 제공하며,
              고객에게 맞춤형 메이크업 솔루션을 제공함
            </li>
          </ul>
        </li>
        <div className="my-6 w-full border" />
        <li>
          <div className="my-4 grid grid-cols-2 gap-4">
            <a
              href="https://www.musinsa.com/brands/rziozia"
              className="flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)지오지아</b>
              <Image src="/image/rziozia.png" alt="지오지아" width="89" height="16" />
            </a>
            <div>2020년 1월 1월 ~ 12월 31일 (12개월)</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: 점원</div>
            <div>부서: 지오지아 SSTS 명동점</div>
          </div>
          <div>직위: 정규직</div>
          <div>역할:</div>
          <ul>
            <li>
              1. 매장 내 상품의 진열을 담당하여, 상품이 체계적이고 미적인 방식으로 진열되어 고객의 쇼핑 경험을 향상시킴
            </li>
            <li>2. 고객의 요구를 파악하고 개별 고객에 맞는 상품을 추천하여 맞춤형 쇼핑 경험을 제공함</li>
            <li>3. 주기적인 판촉 행사 및 시즌별 할인 이벤트에 참여하여 매출 증진에 기여함</li>
            <li>
              4. 매일 상품의 재고를 점검하여 재고 수준을 최적화하고, 품절 상황을 방지함. 필요한 경우 수선 또는 교체를
              조치하여 상품의 품질을 유지함
            </li>
            <li>
              5. 다국적 고객을 위한 의사소통을 지원하여 매장 방문 고객 사이의 언어 장벽을 최소화함. 외국어(예: 영어,
              중국어 등) 능력을 활용하여 비영어권 고객의 상품 문의에 대응하고, 제품 설명 및 사용법을 번역함
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="my-8 text-3xl ">학력</h2>
      <table>
        <thead>
          <tr>
            <td>이름</td>
            <td>세부</td>
            <td>기간</td>
            <td>비고</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>중앙대학교</b> (서울캠퍼스)
            </td>
            <td className="text-center">
              <a href="/pdf/2021-02-15 중앙대학교 학위증.pdf" target="_blank">
                컴퓨터공학부 학사
              </a>
            </td>
            <td className="text-center">
              <a href="/pdf/2023-03-13 중앙대학교 졸업증명서.pdf" target="_blank">
                2017년 3월 ~ 2021년 2월
              </a>
            </td>
            <td className="text-center">졸업</td>
          </tr>
          <tr>
            <td>
              <b>대련 이공대학부속고등학교</b>
              <div>(大连理工大学附属高中)</div>
            </td>
            <td className="text-center">문과</td>
            <td className="text-center">2013년 9월 ~ 2016년 8월 </td>
            <td className="text-center">졸업</td>
          </tr>
          <tr>
            <td>
              <b>대련 육문중학교</b>
              <div>(大连育文中学)</div>
            </td>
            <td className="text-center"></td>
            <td className="text-center">2010년 9월 ~ 2013년 8월 </td>
            <td className="text-center">졸업</td>
          </tr>
        </tbody>
      </table>
      <h2 className="my-8 text-3xl">자격증</h2>
      <table>
        <thead>
          <tr>
            <td>이름</td>
            <td>내용</td>
            <td>주관</td>
            <td>일시</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://www.topik.go.kr/" target="_blank" rel="noreferrer">
                TOPIK Ⅱ
              </a>{' '}
              86회
            </td>
            <td className="text-center">
              <a href="/pdf/2023-01-29 TOPIK 성적증명서 5급.pdf" target="_blank">
                5급 (224점)
              </a>
            </td>
            <td className="text-center">교육부 국립국제교육원</td>
            <td className="text-center">2023년 1월 29일</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.topik.go.kr/" target="_blank" rel="noreferrer">
                TOPIK Ⅱ
              </a>{' '}
              72회
            </td>
            <td className="text-center">
              <a href="/pdf/2020-10-18 TOPIK 성적증명서 6급.pdf" target="_blank">
                6급 (252점)
              </a>
            </td>
            <td className="text-center">교육부 국립국제교육원</td>
            <td className="text-center">2020년 10월 18일</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.topik.go.kr/" target="_blank" rel="noreferrer">
                TOPIK Ⅱ
              </a>{' '}
              48회
            </td>
            <td className="text-center">5급 (228점)</td>
            <td className="text-center">교육부 국립국제교육원</td>
            <td className="text-center">2016년 10월 16일</td>
          </tr>
        </tbody>
      </table>
      <h2 className="my-8 text-3xl ">소개</h2>
      <h3 className="my-4 text-xl ">업무 능력</h3>
      <ul className="grid gap-1">
        <li>- 회사의 다양한 내부 관리 업무에서의 풍부한 경험을 보유하며, 전반적인 업무 관리 능력을 갖추고 있습니다.</li>
        <li>- 구조적이고 체계적인 업무 접근으로 고객 및 팀원과의 협업을 효율적으로 수행합니다.</li>
        <li>- 주어진 업무를 계획적으로 진행하며, 업무 효율성과 결과를 최우선으로 고려합니다.</li>
      </ul>
      <h3 className="my-4 text-xl ">커뮤니케이션 능력</h3>
      <ul className="grid gap-1">
        <li>- 원활한 언어 능력을 바탕으로 회사 내외의 다양한 파트너와 효과적으로 협력합니다.</li>
        <li>
          - 한국어 원활한 커뮤니케이션 가능, 영어 비즈니스 수준 가능, 기본적인 일본어 이해력을 가지며 다양한 언어
          환경에서의 번역 경험을 보유하고 있습니다.
        </li>
      </ul>
      <h3 className="my-4 text-xl ">번역 및 통역 능력</h3>
      <ul className="grid gap-1">
        <li>- 다양한 국적의 관광객을 대상으로 한국어 번역 및 통역 서비스 제공 경험을 보유하고 있습니다.</li>
        <li>- 화장품 관련 제품의 성분 및 효능에 대한 정보를 정확하게 전달합니다.</li>
        <li>- 팀과 협력하여 중국어를 사용하는 관광객에게도 효과적인 서비스를 제공합니다.</li>
      </ul>
      <h3 className="my-4 text-xl ">컴퓨터·디자인 능력</h3>
      <ul className="grid gap-1">
        <li>- UI 설계에 대한 경험을 보유하며, 회사의 디지털 요구 사항을 효과적으로 지원합니다.</li>
        <li>- 디지털 홍보 자료 제작 능력을 활용하여 제품 또는 서비스의 홍보에 기여합니다.</li>
        <li>- 고객의 필요와 관심에 따라 제품을 친절하게 소개하고, 구매 결정까지 세심하게 안내합니다.</li>
      </ul>
      <div className="mt-8 w-full text-center text-sm text-slate-800">작성일: {date}</div>
      <div className="w-full text-center text-sm text-slate-800">작성자: 서신악</div>
    </main>
  )
}
