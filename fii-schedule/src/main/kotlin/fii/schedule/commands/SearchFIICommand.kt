package fii.schedule.commands

import fii.schedule.http.CrawlerFIIClient
import picocli.CommandLine.Command
import picocli.CommandLine.Option
import javax.inject.Inject

@Command(
        name = "search",
        description = ["busca FIIs no crawler"],
        mixinStandardHelpOptions = true
)
class SearchFIICommand(
        @Inject private var crawlerFIIClient: CrawlerFIIClient
) : Runnable {

    @Option(names = ["-q","--query"], description = ["Query for FII"])
    private var query : String = ""

    @Option(names = ["--verbose"], description = ["verbose output"])
    private var verbose : Boolean = false

    override fun run() {

        var findFII = crawlerFIIClient.findFII(query)
        println(findFII)
    }
}