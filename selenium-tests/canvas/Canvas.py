from needle.cases import NeedleTestCase
from needle.driver import NeedleChrome
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

    def test_render_canvas(self):
        self.assertScreenshot('#' + consts.CANVAS_ID, 'test_render_canvas')
