<template>
<div class="admin_page">
                    <div class="page_title">
                        <h2>업체관리</h2>
                        <h3>포인트관리</h3>
                    </div>

                    <h4>상세검색</h4>
                    <section class="shop_search" style="margin-bottom:30px;">
                            <table class="ui table">
                                 <tbody><tr>
                                    <td>지점선택</td>
                                    <td>
                                        <select class="ui dropdown">
                                            <option>지역</option>
                                        </select>
                                        <select class="ui dropdown">
                                            <option>시·도</option>
                                        </select>
                                        <select class="ui dropdown">
                                            <option>구</option>
                                        </select>
                                        <select class="ui dropdown">
                                            <option>동</option>
                                        </select>
                                        <select class="ui dropdown">
                                            <option>지점</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="ui center aligned">
                                        <button class="ui violet button">검색하기</button>
                                    </td>
                                </tr>
                            </tbody></table>
                        </section>

                        <section class="point_list">
                            <div class="point_list_label ui bottom pointing red label">검색된 회원 수는 총 <strong>133명</strong>입니다.</div>
                            <table>
                                <thead>
                                    <tr>
                                        <th class="t1">
                                            <div class="ui fitted checkbox">
                                                <input type="checkbox" name="example">
                                                <label></label>
                                            </div>
                                        </th>
                                        <th class="t2">번호</th>
                                        <th class="t3">지역</th>
                                        <th class="t4">등록지점</th>
                                        <th class="t5">전화번호</th>
                                        <th class="t6">포인트잔액</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="t1">
                                            <div class="ui fitted checkbox">
                                                <input type="checkbox" name="example">
                                                <label></label>
                                            </div>
                                        </td>
                                        <td class="t2">133</td>
                                        <td class="t3">부산 북구 구포</td>
                                        <td class="t4">가연점</td>
                                        <td class="t5">010-8525-4561</td>
                                        <td class="t6">7,500 PT</td>
                                    </tr>
                                    <tr>
                                        <td class="t1">
                                            <div class="ui fitted checkbox">
                                                <input type="checkbox" name="example">
                                                <label></label>
                                            </div>
                                        </td>
                                        <td class="t2">132</td>
                                        <td class="t3">서울</td>
                                        <td class="t4">가연점</td>
                                        <td class="t5">010-8525-4561</td>
                                        <td class="t6">7,500 PT</td>
                                    </tr>
                                    <tr>
                                        <td class="t1">
                                            <div class="ui fitted checkbox">
                                                <input type="checkbox" name="example">
                                                <label></label>
                                            </div>
                                        </td>
                                        <td class="t2">131</td>
                                        <td class="t3">서울</td>
                                        <td class="t4">가연점</td>
                                        <td class="t5">010-8525-4561</td>
                                        <td class="t6">7,500 PT</td>
                                    </tr>
                                    <tr>
                                        <td class="t1">
                                            <div class="ui fitted checkbox">
                                                <input type="checkbox" name="example">
                                                <label></label>
                                            </div>
                                        </td>
                                        <td class="t2">130</td>
                                        <td class="t3">서울</td>
                                        <td class="t4">가연점</td>
                                        <td class="t5">010-8525-4561</td>
                                        <td class="t6">7,500 PT</td>
                                    </tr>
                                    <tr>
                                        <td class="t1">
                                            <div class="ui fitted checkbox">
                                                <input type="checkbox" name="example">
                                                <label></label>
                                            </div>
                                        </td>
                                        <td class="t2">130</td>
                                        <td class="t3">서울</td>
                                        <td class="t4">가연점</td>
                                        <td class="t5">010-8525-4561</td>
                                        <td class="t6">7,500 PT</td>
                                    </tr>
                                    <tr>
                                        <td class="t1">
                                            <div class="ui fitted checkbox">
                                                <input type="checkbox" name="example">
                                                <label></label>
                                            </div>
                                        </td>
                                        <td class="t2">130</td>
                                        <td class="t3">서울</td>
                                        <td class="t4">가연점</td>
                                        <td class="t5">010-8525-4561</td>
                                        <td class="t6">7,500 PT</td>
                                    </tr>
                                    <tr>
                                        <td class="t1">
                                            <div class="ui fitted checkbox">
                                                <input type="checkbox" name="example">
                                                <label></label>
                                            </div>
                                        </td>
                                        <td class="t2">130</td>
                                        <td class="t3">서울</td>
                                        <td class="t4">가연점</td>
                                        <td class="t5">010-8525-4561</td>
                                        <td class="t6">7,500 PT</td>
                                    </tr>
                                    <tr>
                                        <td class="t1">
                                            <div class="ui fitted checkbox">
                                                <input type="checkbox" name="example">
                                                <label></label>
                                            </div>
                                        </td>
                                        <td class="t2">130</td>
                                        <td class="t3">서울</td>
                                        <td class="t4">가연점</td>
                                        <td class="t5">010-8525-4561</td>
                                        <td class="t6">7,500 PT</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="point_list_btns">
                                <div class="ui mini left floated pagination menu">
                                    <a class="icon item">
                                    <i class="left chevron icon"></i>
                                    </a>
                                    <a class="item">1</a>
                                    <a class="item">2</a>
                                    <a class="item">3</a>
                                    <a class="icon item">
                                    <i class="right chevron icon"></i>
                                    </a>
                                </div>

                                <div class="ui right floated blue small button">전체 포인트 충전</div>
                                <div class="ui right floated violet small button">선택 포인트 충전</div>
                            </div> <!-- point_list_btns -->

                            <div class="point_modal ui mini modal">
                                <div class="header">포인트충전</div>
                                <div class="content">
                                    <div class="ui bottom pointing fluid label">
                                        총 32명이 선택되었습니다
                                    </div>
                                    <div class="ui right labeled fluid input ">
                                        <input type="text">
                                        <label class="ui basic label">P</label>
                                    </div>
                                    <button class="ui fluid violet button" style="margin-top:15px">
                                        포인트충전
                                    </button>
                                </div>
                            </div>
                        </section></div>
</template>

<script>
export default {

}
</script>

<style>

</style>