from needle.cases import NeedleTestCase
from needle.driver import NeedleChrome
from helpers.CanvasActionChains import CanvasActionChains
import config as config
import consts as consts


class CanvasTest(NeedleTestCase):
    cleanup_on_success = True

    @classmethod
    def get_web_driver(cls):
        return NeedleChrome()

    def setUp(self):
        self.driver.get(config.PATH)
        self.driver.execute_script("window.localStorage.clear()")
        self.driver.get(config.PATH)

    def test_draw_multiLine(self):
        self.driver.find_element_by_class_name(consts.MULTILINE_TOOL_CLASS).click()
        action = CanvasActionChains(self.driver, consts.CANVAS_ID)
        action.move_to(50, 50) \
            .click() \
            .move_to(100, 50) \
            .click() \
            .move_to(100, 100) \
            .click() \
            .move_to(50, 100) \
            .click() \
            .perform()
        self.assertScreenshot('#' + consts.CANVAS_ID, 'test_draw_multiLine')
