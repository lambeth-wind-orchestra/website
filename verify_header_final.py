from playwright.sync_api import sync_playwright
import time
import subprocess
import os

def verify():
    # Start dev server
    proc = subprocess.Popen(["npm", "run", "dev"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(8) # Increased wait for server to start

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            # Desktop
            page.set_viewport_size({"width": 1280, "height": 720})
            page.goto("http://localhost:4321")
            page.wait_for_load_state("networkidle")
            # Wait for the logo specifically
            page.wait_for_selector('svg')
            page.screenshot(path="final_desktop_header.png")

            # Mobile
            page.set_viewport_size({"width": 375, "height": 667})
            page.goto("http://localhost:4321")
            page.wait_for_load_state("networkidle")
            page.wait_for_selector('svg')
            page.screenshot(path="final_mobile_header.png")

            browser.close()
    finally:
        proc.terminate()

if __name__ == "__main__":
    verify()
