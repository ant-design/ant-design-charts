const getFilesCountText = (count) => (count === 1 ? '1 file' : `${count} files`)

class Reporter {
  #hasPrinted = false
  #options
  #status
  #logger

  constructor(files, options) {
    this.#options = options
    this.#status = {
      matchedFilesCount: files.length,
      failedFilesCount: 0,
      wellSortedFilesCount: 0,
      changedFilesCount: 0,
    }

    this.#logger = options.shouldBeQuiet
      ? { log() {}, error() {} }
      : {
          log: (...args) => {
            this.#hasPrinted = true
            console.log(...args)
          },
          error: (...args) => {
            this.#hasPrinted = true
            console.error(...args)
          },
        }
  }

  // The file is well-sorted
  reportNotChanged(/* file */) {
    this.#status.wellSortedFilesCount++
  }

  reportChanged(file) {
    this.#status.changedFilesCount++
    this.#logger.log(this.#options.isCheck ? `${file}` : `${file} is sorted!`)
  }

  reportFailed(file, error) {
    this.#status.failedFilesCount++

    console.error('Error on: ' + file)
    this.#logger.error(error.message)
  }

  printSummary() {
    const {
      matchedFilesCount,
      failedFilesCount,
      changedFilesCount,
      wellSortedFilesCount,
    } = this.#status

    if (matchedFilesCount === 0) {
      console.error('No matching files.')
      process.exitCode = 2
      return
    }

    const { isCheck, isQuiet } = this.#options

    if (isCheck && changedFilesCount) {
      process.exitCode = 1
    }

    if (failedFilesCount) {
      process.exitCode = 2
    }

    if (isQuiet) {
      return
    }

    const { log } = this.#logger

    // Print an empty line.
    if (this.#hasPrinted) {
      log()
    }

    // Matched files
    log('Found %s.', getFilesCountText(matchedFilesCount))

    // Failed files
    if (failedFilesCount) {
      log(
        '%s could not be %s.',
        getFilesCountText(failedFilesCount),
        isCheck ? 'checked' : 'sorted',
      )
    }

    // Changed files
    if (changedFilesCount) {
      if (isCheck) {
        log(
          '%s %s not sorted.',
          getFilesCountText(changedFilesCount),
          changedFilesCount === 1 ? 'was' : 'were',
        )
      } else {
        log('%s successfully sorted.', getFilesCountText(changedFilesCount))
      }
    }

    // Well-sorted files
    if (wellSortedFilesCount) {
      log(
        '%s %s already sorted.',
        getFilesCountText(wellSortedFilesCount),
        wellSortedFilesCount === 1 ? 'was' : 'were',
      )
    }
  }
}

export default Reporter
