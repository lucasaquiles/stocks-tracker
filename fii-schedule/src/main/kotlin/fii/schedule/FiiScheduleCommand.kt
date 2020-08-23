package fii.schedule

import fii.schedule.commands.SearchFIICommand
import io.micronaut.configuration.picocli.PicocliRunner
import picocli.CommandLine.Command
import picocli.CommandLine.Option

@Command(name = "fii-schedule", description = ["..."],
        mixinStandardHelpOptions = true, subcommands = [SearchFIICommand::class])
class FiiScheduleCommand : Runnable {

    @Option(names = ["-v", "--verbose"], description = ["..."])
    private var verbose : Boolean = false

    override fun run() {

        if (verbose) {
            println("Hi!")
        }
    }

    companion object {
        @JvmStatic fun main(args: Array<String>) {
            PicocliRunner.run(FiiScheduleCommand::class.java, *args)
        }
    }
}
