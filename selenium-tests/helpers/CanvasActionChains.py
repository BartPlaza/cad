from selenium.webdriver import ActionChains


class CanvasActionChains(ActionChains):
    def __init__(self, driver, canvas):
        super().__init__(driver)
        self._canvas = canvas

    def move_to(self, x, y):
        self.move_to_element_with_offset(self._driver.find_element_by_id(self._canvas), x, y)
        return self
