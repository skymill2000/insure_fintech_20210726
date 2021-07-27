from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')

# 실습3
# AIA 생명 치아보험 견적 페이지에서 보장 내역과 보험료을 가져와서 출력을한다


def getAIAdata(birth):
    driver.get(
        'https://www.aia.co.kr/ko/our-products/medical-protection/non-par-denteal-health-plan.html#')
    # -----logic 작성----

    # -----logic 작성----


getAIAdata('890119')
