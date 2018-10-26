<template>
<div class="admin_page">
    <div class="page_title">
        <h2>업체관리</h2>
        <h3>업체등록</h3>
    </div>
    <h4>업체 정보 입력</h4>
    <div class="section_box shop_signup">
        <section class="section">
            <h5><i class="ui caret square right icon"></i>계정정보</h5>
            <div class="ui form">
                <div class="four fields">
                    <div class="field">
                        <label>아이디</label>
                        <div class="ui input">
                            <input type="text" placeholder="아이디">
                        </div>
                    </div>
                    <div class="field">
                        <label>비밀번호</label>
                        <div class="ui input">
                            <input type="text" placeholder="비밀번호">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <h5><i class="ui caret square right icon"></i>기본정보</h5>
            <div class="ui form">
                <div class="three fields">
                    <div class="field">
                        <label>업체명</label>
                        <div class="ui input">
                            <input type="text" placeholder="업체명">
                        </div>
                    </div>
                    <div class="field">
                        <label>대표자명</label>
                        <div class="ui input">
                            <input type="text" placeholder="대표자명">
                        </div>
                    </div>
                    <div class="field">
                        <label>사업자번호</label>
                        <div class="ui input">
                            <input type="text" placeholder="사업자번호">
                        </div>
                    </div>                             
                </div>
                <div class="fields">
                    <div class="sixteen wide field">
                        <label>업장주소</label>
                        <div class="ui input">
                            <input type="text" placeholder="주소">
                        </div>
                    </div>                      
                </div>
                <div class="three fields">
                    <div class="field">
                        <label>이메일</label>
                        <div class="ui input">
                            <input type="text" placeholder="이메일">
                        </div>
                    </div>
                    <div class="field">
                        <label>전화번호</label>
                        <div class="ui input">
                            <input type="text" placeholder="전화번호">
                        </div>
                    </div>
                    <div class="field">
                        <label>휴대폰</label>
                        <div class="ui input">
                            <input type="text" placeholder="휴대폰">
                        </div>
                    </div>                        
                </div>
                <div class="four fields">
                    <div class="eight wide field">
                        <label>은행계좌정보</label>
                        <div class="ui input">
                            <input type="text" placeholder="은행계좌정보">
                        </div>
                    </div>
                    <div class="eight wide field">
                        <label>기타입력사항</label>
                        <div class="ui input">
                            <input type="text" placeholder="기타입력사항">
                        </div>
                    </div>                            
                </div>
            </div>
        </section>

        <section class="section">
            <h5><i class="ui caret square right icon"></i>상세정보</h5>
            <div class="ui form">
                <div class="three fields">
                    <div class="field">
                        <label>가맹점</label>
                        <sui-dropdown
                            selection
                            placeholder="가맹점"
                            direction="downward"
                            :options="dropdown.company"></sui-dropdown>
                    </div>
                    <div class="field">
                        <label>면적</label>
                        <sui-input placeholder="asdf"></sui-input>
                    </div>
                    <div class="field">
                        <label>층수</label>
                        <sui-input placeholder="asdf"></sui-input>
                    </div>  
                </div>

                <div class="three fields">
                    <div class="field">
                        <label>권리금</label>
                        <sui-input placeholder="asdf"></sui-input>
                    </div>
                    <div class="field">
                        <label>보증금</label>
                        <sui-input placeholder="asdf"></sui-input>
                    </div>
                    <div class="field">
                        <label>장비투자금</label>
                        <sui-input placeholder="asdf"></sui-input>
                    </div>                        
                </div>
                <div class="three fields">
                    <div class="field">
                        <label>시설 및 기타비용</label>
                        <sui-input placeholder="asdf"></sui-input>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: {
        company: [
          { text: "덱스티", value: 1 },
          { text: "덱스티", value: 1 },
          { text: "덱스티", value: 1 }
        ]
      }
    };
  }
};
</script>

<style>
</style>
