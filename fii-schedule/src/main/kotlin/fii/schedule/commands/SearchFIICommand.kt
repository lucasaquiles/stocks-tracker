package fii.schedule.commands

import fii.schedule.http.CrawlerFIIClient
import fii.schedule.http.FIIResult
import picocli.CommandLine
import picocli.CommandLine.Command
import picocli.CommandLine.Help.Ansi
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

        print(format(findFII))
        if(verbose) {
            println(String.format("\nType: %s\nmedian: R$%s", findFII.fiiType, findFII.sumary.median))
        }
    }

    private fun format(fiiResult: FIIResult) : String {
        return Ansi.AUTO.string(String.format(
                "Current Value: R$%s\nDividend Yeld: R$%s\nLast dividend Yeld: R$%s",
                fiiResult.value,
                fiiResult.dividendYeld,
                fiiResult.lastDividend
        ))
    }
}