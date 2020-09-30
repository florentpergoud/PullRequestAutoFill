# PullRequestAutoFill
A chrome extension to auto fill part of pull request text

## Installation 
- Clone repo locally on your computer
- Go to chrome://extensions/
- Toggle on developper mode
- Clic on "add unpacked extension"
- Choose your locale copy of this repo
- Done

## How to use it

For a project I work on, we have a pr template with this format : 

    ##🖼 Screenshots |

    - [ ] Screenshots + mock-up if working on displayed elements
    - Replace the MOCKUP_URL and SCREEN_URL below by the link to the screenshots
    - [iOS Check link](https://pr-diff-check.vercel.app/?base=MOCKUP_URL&compare=IOS_SCREEN_URL)
    - [Android Check link](https://pr-diff-check.vercel.app/?base=MOCKUP_URL&compare=ANDROID_SCREEN_URL)

    | Mockup(s) | Implementation iOS | Implementation Android |
    | --------- | ------------------ | ---------------------- |
    | …         | …                  | …                      |

It was painfull to add screenshot in the three "…" parts and then to replace "MOCKUP_URL", "IOS_SCREEN_URL" and "ANDROID_SCREEN_URL" with the correct url. Then to reformat the Mockup(s) section to remove extra lines that break the array.

So this extension allows you to replace "..." by draging on them your images and then it replaces the "*_URL" with the correct urls and then reformat the Mockup(s) section.
